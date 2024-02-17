import profile from "../../assets/profile.svg";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";
import send from "../../assets/send.svg";
import back from "../../assets/back.svg";
import { useMyContext } from "../../store/context";
import { getDataFromLocalStorage } from "../../utils/storage";

export default function MessageBox() {
  const { state, dispatch } = useMyContext();
  const fbPageID = getDataFromLocalStorage("fbPageID");

  const sender = state.selectedConversation?.participants.find(
    (p) => p.id !== fbPageID
  );

  console.log("messages: ", state.selectedConversation?.messages);

  return (
    <div className="flex-1 flex flex-col min-w-[280px] relative overflow-y-scroll px-4">
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
        <div className="flex gap-1 rounded-full mx-2 bg-white shadow-xl border border-gray-300 items-center px-2 py-2 ">
          <input
            type="text"
            placeholder="Message Hiten Saxena"
            className="flex-1 py-1 px-2 rounded-full outline-none font-medium"
          />
          <img src={send} alt="send" className="w-5 h-5 cursor-pointer" />
        </div>
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
