import Sidebar from "./ui/Sidebar";
import Conversation from "./ui/Conversation";
import Profile from "./ui/Profile";
import MessageBox from "./ui/MessageBox";

export default function AgentScreen() {
  return (
    <div className="h-screen w-screen flex ">
      {/* sidebar component */}
      <Sidebar />
      {/* conversation component */}
      <Conversation />
      {/* message box component */}
      <MessageBox />
      {/* profile component */}
      <Profile />
    </div>
  );
}
