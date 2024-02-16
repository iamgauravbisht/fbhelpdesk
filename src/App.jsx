import ConnectFBPage from "./components/ui/ConnectFBPage";
import DisconnectFBPage from "./components/ui/DisconnectFBPage";
import SignupForm from "./components/ui/SignupForm";
import LoginForm from "./components/ui/LoginForm";
import FBLogin from "./components/ui/FBLogin";
// import AgentScreen from "./components/AgentScreen";
import Dashboard from "./components/Dashboard";
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
          <Route path="/disconnectfbpage" element={<DisconnectFBPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/FBLogin" element={<FBLogin />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
