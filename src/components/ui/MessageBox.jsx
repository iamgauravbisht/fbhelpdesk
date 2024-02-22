import profile from "../../assets/profile.svg";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";
import send from "../../assets/send.svg";
import back from "../../assets/back.svg";
import { useMyContext } from "../../store/context";
import { getDataFromLocalStorage } from "../../utils/storage";
import { useEffect, useState, useRef } from "react";
import {
  replyToComment,
  replyToMessage,
  getSelectedConversation,
} from "../../utils/page";
import { getCookie } from "../../utils/auth";

export default function MessageBox() {
  const { state, dispatch } = useMyContext();
  const fbPageID = getDataFromLocalStorage("fbPageID");

  const sender = state.selectedConversation?.participants.find(
    (p) => p.id !== fbPageID
  );

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    };
    scrollToBottom();
  }, [state.selectedConversation]);

  useEffect(() => {
    const v = setTimeout(async () => {
      const response = await getSelectedConversation({
        pageID: fbPageID,
        pageAccessToken: getCookie("fbPageToken"),
        messageThreadID: state.selectedConversation?.id,
        participants: state.selectedConversation?.participants,
      });
      if (response.message.includes("success")) {
        dispatch({
          type: "SET_SELECTED_CONVERSATION",
          payload: response.conversation.find(
            (c) => c.messages[0].id == state.selectedConversation.messages[0].id
          ),
        });
      }
    }, 10000);
    return clearTimeout(v);
  }, [
    dispatch,
    fbPageID,
    state.selectedConversation,
    state.selectedConversation?.id,
    state.selectedConversation?.participants,
  ]);

  return (
    <div
      className="flex-1 flex flex-col min-w-[280px] relative overflow-y-scroll px-4"
      ref={chatContainerRef}
    >
      <div className="flex justify-between items-center  bg-white py-5 px-4 shadow-lg sticky top-0 z-10">
        <h1 className="font-bold text-xl">
          {sender ? sender.name : "Amit RG"}
        </h1>
        <div className="flex gap-3 justify-center items-center ">
          <img
            src={back}
            alt="profile"
            className="cursor-pointer sm:hidden"
            onClick={() => dispatch({ type: "SET_MESSAGES", payload: false })}
          />
          <img
            src={profile}
            alt="profile"
            className="cursor-pointer"
            onClick={() => dispatch({ type: "SET_PROFILE", payload: true })}
          />
        </div>
      </div>
      <div
        className=" min-w-[250px] md:max-w-[375px] lg:max-w-[600px] fixed 
        self-center
        bottom-14 w-4/5 
        mb-2
        sm:bottom-6
        z-10 "
      >
        <InputMessegeButton recipientPSID={sender.id} />
      </div>
      {state.selectedConversation?.messages?.length > 0 &&
        state.selectedConversation?.messages.map((message) =>
          message.from.id == sender.id ? (
            <LeftMessage
              key={message.id}
              message={message}
              name={sender.name}
            />
          ) : (
            <RightMessage
              key={message.id}
              message={message}
              name={message.from.name}
            />
          )
        )}
      <div className="w-full min-h-32 sm:"></div>
    </div>
  );
}

function InputMessegeButton({ recipientPSID }) {
  const [text, setText] = useState("");
  const { state, dispatch } = useMyContext();
  const fbPageID = getDataFromLocalStorage("fbPageID");
  const fbPageToken = getCookie("fbPageToken");

  const updateMessage = async () => {
    if (text === "") {
      console.log("empty message");
      return;
    }
    console.log(state.selectedConversation?.type);
    //check conversation type and send message accordingly
    if (state.selectedConversation?.type == "FACEBOOK DM") {
      console.log("sending message to FB");
      const response = await replyToMessage({
        pageID: fbPageID,
        pageAccessToken: fbPageToken,
        recipientPSID: recipientPSID,
        message: text,
        messageThreadID: state.selectedConversation?.id, //messageThreadID
        participants: state.selectedConversation?.participants,
      });
      if (response.message.includes("success")) {
        // find the conversation in conversations and update the text message in it and set it as selected conversation
        dispatch({
          type: "SET_SELECTED_CONVERSATION",
          payload: response.conversation.find(
            (c) => c.messages[c.messages.length - 1].message == text
          ),
        });
        console.log("something wrong was happening here");
      }
    }
    if (state.selectedConversation?.type == "FACEBOOK POST") {
      console.log("sending Reply to FB Post");
      const response = await replyToComment({
        pageAccessToken: fbPageToken,
        commentID: state.selectedConversation?.id,
        message: text,
      });
      console.log("response: ", response);
      if (response.message.includes("success")) {
        // find the conversation in conversations and update the text message in it and set it as selected conversation
        dispatch({
          type: "SET_SELECTED_CONVERSATION",
          payload: response.conversation,
        });
        // UPDATE THE CONVERSATION IN ALL CONVERSATIONS ARRAY for that find your conversation and update it
        dispatch({
          type: "SET_ALL_CONVERSATONS",
          payload: [
            state.allConversations.map((conversation) => {
              if (conversation.id == state.selectedConversation.id) {
                return response.conversation;
              } else {
                return conversation;
              }
            }),
          ],
        });
      }
    }
    console.log("message sent and updated");
    setText("");
  };

  return (
    <div className="flex gap-1 rounded-full mx-2 bg-white shadow-xl border border-gray-300 items-center px-2 py-2 ">
      <input
        type="text"
        placeholder="Message Hiten Saxena"
        className="flex-1 py-1 px-2 rounded-full outline-none font-medium"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={updateMessage}>
        <img src={send} alt="send" className="w-5 h-5 cursor-pointer" />
      </button>
    </div>
  );
}
