import Conversation from "./ui/Conversation";
import Profile from "./ui/Profile";
import MessageBox from "./ui/MessageBox";
import { useMyContext } from "../store/context";
import { getConversations } from "../utils/page";
import { useEffect, useState } from "react";
import { getCokkie } from "../utils/auth";
import { getDataFromLocalStorage } from "../utils/storage";

export default function AgentScreen() {
  const { state } = useMyContext();
  const [c, setc] = useState();
  useEffect(() => {
    const pageID = getCokkie("fbPageToken");
    const fbPageToken = getDataFromLocalStorage("fbPageID");
    if (!pageID || !fbPageToken) return;

    async function getConversation({ pageID, fbPageToken }) {
      const conversations = await getConversations({
        pageID: pageID,
        fbPageToken: fbPageToken,
      });
      setc(conversations);
    }
    getConversation({ pageID, fbPageToken });
  }, [state.pageID, state.fbPageToken]);

  console.log("conversations :", c);

  return (
    <>
      <div className="flex-1 flex md:hidden w-full ">
        {/* conversation component or message box component or profile component */}
        {state.conversations ? (
          <Conversation />
        ) : state.profile ? (
          <Profile />
        ) : state.messages ? (
          <MessageBox />
        ) : (
          <Conversation />
        )}
      </div>
      <div className="flex-1 hidden md:flex xl:hidden ">
        {/* conversation component */}
        <Conversation />
        {/* message box component or profile component */}
        {state.profile ? <Profile /> : state.messages ? <MessageBox /> : null}
      </div>
      <div className="flex-1 hidden  xl:flex w-full">
        {/* conversation component */}
        <Conversation />
        {/* message box component */}
        {state.messages ? <MessageBox /> : null}
        {/* profile component */}
        {state.profile ? <Profile /> : null}
      </div>
    </>
  );
}
