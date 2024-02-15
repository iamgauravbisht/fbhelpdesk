import refresh from "../../assets/refresh.svg";
import menu from "../../assets/menu.svg";
import ConversationCard from "./ConversationCard";

export default function Conversation() {
  return (
    <div className="flex flex-col min-w-[280px] max-w-[640px] md:max-w-[300px] h-full overflow-auto bg-gray-100 relative ">
      <div className="flex justify-between items-center  bg-white py-5 px-4 shadow-lg sticky top-0 z-10">
        <div className="flex items-center gap-2 justify-center">
          <img src={menu} alt="menu" className="cursor-pointer" />
          <h1 className="font-bold text-xl">Conversations</h1>
        </div>
        <img src={refresh} alt="refresh" className="cursor-pointer" />
      </div>
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <div className="w-full min-h-14 sm:hidden"></div>
    </div>
  );
}
