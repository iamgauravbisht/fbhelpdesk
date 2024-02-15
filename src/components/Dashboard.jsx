import Sidebar from "./ui/Sidebar";
import AgentScreen from "./AgentScreen";

export default function Dashboard() {
  return (
    <div className="h-screen w-screen flex relative ">
      {/* sidebar component */}
      <Sidebar />
      {/* agent screen component */}
      <AgentScreen />
    </div>
  );
}
