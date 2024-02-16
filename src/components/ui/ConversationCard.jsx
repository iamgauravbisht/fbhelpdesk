import { useMyContext } from "../../store/context";

export default function ConversationCard() {
  const { dispatch } = useMyContext();

  const handleClick = () => {
    console.log("conversation clicked");
    dispatch({ type: "SET_CONVERSATIONS", payload: false });
    dispatch({ type: "SET_PROFILE", payload: false });
    dispatch({ type: "SET_MESSAGES", payload: true });
  };

  return (
    <div className="py-3 px-4 flex-1" onClick={handleClick}>
      <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <div className="flex justify-between w-full ">
          <div>
            <h1 className="font-bold">Amit RG</h1>
            <p className="text-sm font-bold">Facebook DM</p>
          </div>
          <div>10m</div>
        </div>
      </div>
      <div className="">
        <p className="text-sm font-bold truncate overflow-hidden text-ellipsis">
          Hi, I have a question about my order
        </p>
        <p className="text-sm truncate overflow-hidden text-ellipsis">
          Hi, I have a question about my order. Hi, I have a question about my
          order
        </p>
      </div>
    </div>
  );
}
