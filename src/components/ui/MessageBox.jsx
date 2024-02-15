import profile from "../../assets/profile.svg";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";
import send from "../../assets/send.svg";
import back from "../../assets/back.svg";
import { profileAtom, conversationsAtom } from "../../store/atom";
import { useSetRecoilState } from "recoil";
export default function MessageBox() {
  const setProfile = useSetRecoilState(profileAtom);
  const setConversations = useSetRecoilState(conversationsAtom);

  return (
    <div className="flex-1 flex flex-col min-w-[280px] relative overflow-y-scroll px-4">
      <div className="flex justify-between items-center  bg-white py-5 px-4 shadow-lg sticky top-0 z-10">
        <h1 className="font-bold text-xl">Amit RG</h1>
        <div className="flex gap-3 justify-center items-center ">
          <img
            src={back}
            alt="profile"
            className="cursor-pointer sm:hidden"
            onClick={() => setConversations((c) => !c)}
          />
          <img
            src={profile}
            alt="profile"
            className="cursor-pointer"
            onClick={() => setProfile((p) => !p)}
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
      <LeftMessage />
      <RightMessage />
      <LeftMessage />
      <RightMessage />
      <LeftMessage />
      <RightMessage />
      <LeftMessage />
      <RightMessage />
      <LeftMessage />
      <RightMessage />
      <LeftMessage />
      <RightMessage />
      <div className="w-full min-h-32 sm:"></div>
    </div>
  );
}
