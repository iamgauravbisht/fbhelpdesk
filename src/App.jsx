// import Authform from "./components/Authform";
import ConnectFBPage from "./components/ui/ConnectFBPage";
import DisconnectFBPage from "./components/ui/DisconnectFBPage";
import SignupForm from "./components/ui/SignupForm";
import LoginForm from "./components/ui/LoginForm";
import AgentScreen from "./components/AgentScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/connectfbpage" element={<ConnectFBPage />} />
          <Route path="/disconnectpage" element={<DisconnectFBPage />} />
          <Route path="/agentscreen" element={<AgentScreen />} />
          <Route path="/dashboard" element={<AgentScreen />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
