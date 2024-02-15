import Conversation from "./ui/Conversation";
import Profile from "./ui/Profile";
import MessageBox from "./ui/MessageBox";

export default function AgentScreen() {
  const isAgent = true;
  return (
    <>
      <div className="flex-1 flex md:hidden w-full ">
        {/* conversation component */}
        {/* {isAgent ? <Conversation /> : null} */}
        {/* message box component */}
        {isAgent ? <MessageBox /> : null}
        {/* profile component */}
        {/* {isAgent ? <Profile /> : null} */}
      </div>
      <div className="flex-1 hidden md:flex xl:hidden ">
        {/* conversation component */}
        <Conversation />
        {/* message box component */}
        <MessageBox />
        {/* profile component */}
        {/* <Profile /> */}
      </div>
      <div className="flex-1 hidden  xl:flex w-full">
        {/* conversation component */}
        <Conversation />
        {/* message box component */}
        <MessageBox />
        {/* profile component */}
        <Profile />
      </div>
    </>
  );
}
