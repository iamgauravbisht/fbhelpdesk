import profile from "../../assets/profile.svg";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";
import send from "../../assets/send.svg";

export default function MessageBox() {
  return (
    <div className="flex-1 flex flex-col  min-w-[280px] relative overflow-y-scroll px-4">
      <div className="flex justify-between items-center  bg-white py-5 px-4 shadow-lg sticky top-0 z-10">
        <h1 className="font-bold text-xl">Amit RG</h1>
        <img src={profile} alt="profile" className="cursor-pointer" />
      </div>
      <div className=" min-w-[250px] max-w-[500px] md:max-w-[640px] w-full fixed bottom-14 sm:bottom-6 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 ">
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
      <div className="w-full min-h-32 sm:hidden"></div>
    </div>
  );
}
