import Conversation from "./ui/Conversation";
import Profile from "./ui/Profile";
import MessageBox from "./ui/MessageBox";
import { useMyContext } from "../store/context";

export default function AgentScreen() {
  const { state } = useMyContext();

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
