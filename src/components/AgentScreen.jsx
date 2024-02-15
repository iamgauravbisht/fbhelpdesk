import Conversation from "./ui/Conversation";
import Profile from "./ui/Profile";
import MessageBox from "./ui/MessageBox";
import { messagesAtom, conversationsAtom, profileAtom } from "../store/atom";
import { useRecoilValue } from "recoil";

export default function AgentScreen() {
  const messages = useRecoilValue(messagesAtom);
  const conversations = useRecoilValue(conversationsAtom);
  const profile = useRecoilValue(profileAtom);

  return (
    <>
      <div className="flex-1 flex md:hidden w-full ">
        {/* conversation component or message box component or profile component */}
        {conversations ? (
          <Conversation />
        ) : profile ? (
          <Profile />
        ) : messages ? (
          <MessageBox />
        ) : (
          <Conversation />
        )}
      </div>
      <div className="flex-1 hidden md:flex xl:hidden ">
        {/* conversation component */}
        <Conversation />
        {/* message box component or profile component */}
        {profile ? <Profile /> : messages ? <MessageBox /> : null}
      </div>
      <div className="flex-1 hidden  xl:flex w-full">
        {/* conversation component */}
        <Conversation />
        {/* message box component */}
        {messages ? <MessageBox /> : null}
        {/* profile component */}
        {profile ? <Profile /> : null}
      </div>
    </>
  );
}
