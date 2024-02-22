import { useMyContext } from "../../store/context";
import { getDataFromLocalStorage } from "../../utils/storage";

export default function ConversationCard({ conversation }) {
  const { dispatch } = useMyContext();
  const fbPageID = getDataFromLocalStorage("fbPageID");
  const sender = conversation?.participants.find((p) => p.id !== fbPageID);
  const createdTime = new Date(conversation?.messages[0]?.created_time);
  const currentTime = new Date();
  const timeElapsed = currentTime - createdTime;

  const seconds = Math.floor(timeElapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let displayTime;
  if (days > 0) {
    displayTime = `${days} day(s)`;
  } else if (hours > 0) {
    displayTime = `${hours} hr(s)`;
  } else if (minutes > 0) {
    displayTime = `${minutes} min(s)`;
  } else {
    displayTime = `${seconds} sec(s)`;
  }

  const handleClick = () => {
    dispatch({ type: "SET_CONVERSATIONS", payload: false });
    dispatch({ type: "SET_PROFILE", payload: false });
    dispatch({ type: "SET_MESSAGES", payload: true });
    dispatch({ type: "SET_SELECTED_CONVERSATION", payload: conversation });
  };

  const firstMessage = conversation?.messages[0]?.message ?? "";
  const lastMessage =
    conversation?.messages[conversation?.messages?.length - 1]?.message ?? "";

  return (
    <div className="py-3 px-4 w-full cursor-pointer " onClick={handleClick}>
      <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <div className="flex justify-between w-5/6">
          <div className="w-3/4">
            <h1 className="font-bold truncate overflow-hidden text-ellipsis ">
              {sender ? sender.name : "Amit RG"}
            </h1>
            <p className="text-sm font-bold">{conversation?.type}</p>
          </div>
          <div className="text-nowrap">{displayTime}</div>
        </div>
      </div>
      <div className="">
        <p className="text-sm font-bold truncate overflow-hidden text-ellipsis">
          {firstMessage}
        </p>
        <p className="text-sm truncate overflow-hidden text-ellipsis">
          {lastMessage}
        </p>
      </div>
    </div>
  );
}
