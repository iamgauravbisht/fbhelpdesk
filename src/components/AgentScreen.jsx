import Conversation from "./ui/Conversation";
import Profile from "./ui/Profile";
import MessageBox from "./ui/MessageBox";
import { useMyContext } from "../store/context";
import { getConversations } from "../utils/page";
import { useEffect } from "react";
import { getCookie } from "../utils/auth";
import { getDataFromLocalStorage } from "../utils/storage";

export default function AgentScreen() {
  const { state, dispatch } = useMyContext();
  useEffect(() => {
    const fbPageToken = getCookie("fbPageToken");
    const pageID = getDataFromLocalStorage("fbPageID");
    const userID = getDataFromLocalStorage("userID");
    if (!pageID || !fbPageToken || !userID) return;
    async function getConversation({ pageID, fbPageToken, userID }) {
      const conversations = await getConversations({
        pageID: pageID,
        fbPageToken: fbPageToken,
        userID: userID,
      });
      console.log("conversations: ", conversations);
      dispatch({ type: "SET_ALL_CONVERSATIONS", payload: conversations });
    }

    getConversation({ pageID, fbPageToken, userID });
  }, [state.pageID, state.fbPageToken, dispatch]);

  return (
    <>
      <div className="flex-1 flex md:hidden w-full ">
        {/* conversation component or message box component or profile component */}
        {state.conversations ? (
          <Conversation conversations={state.allConversations} />
        ) : state.profile ? (
          <Profile />
        ) : state.messages ? (
          <MessageBox />
        ) : (
          <Conversation conversations={state.allConversations} />
        )}
      </div>
      <div className="flex-1 hidden md:flex xl:hidden ">
        {/* conversation component */}
        <Conversation conversations={state.allConversations} />
        {/* message box component or profile component */}
        {state.profile ? <Profile /> : state.messages ? <MessageBox /> : null}
      </div>
      <div className="flex-1 hidden  xl:flex w-full">
        {/* conversation component */}
        <Conversation conversations={state.allConversations} />
        {/* message box component */}
        {state.messages ? <MessageBox /> : null}
        {/* profile component */}
        {state.profile ? <Profile /> : null}
      </div>
    </>
  );
}
