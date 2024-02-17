import profile from "../../assets/profile.svg";
import call from "../../assets/call.svg";
import { useMyContext } from "../../store/context";
import { getDataFromLocalStorage } from "../../utils/storage";

export default function Profile() {
  const { state } = useMyContext();
  const fbPageID = getDataFromLocalStorage("fbPageID");

  const sender = state.selectedConversation?.participants.find(
    (p) => p.id !== fbPageID
  );

  return (
    <div className="flex flex-col gap-10 p-10 border border-gray-300 rounded-lg shadow-xl h-fit min-w-[280px] mx-4 mt-4 ">
      <div className="flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-black my-3"></div>
        <h2 className="font-semibold"> {sender ? sender.name : "Amit RG"}</h2>
        <div className="text-sm flex gap-2 justify-center items-center">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          offline/online
        </div>
        <div className="flex justify-center items-center gap-4 mt-5 text-sm font-semibold">
          <button className="flex justify-center items-center gap-1 border border-gray-300 rounded-sm px-2 py-1">
            <img src={call} alt="call" />
            <span>Call</span>
          </button>
          <button className="flex justify-center items-center gap-1 border border-gray-300 rounded-sm px-2 py-1">
            <img src={profile} alt="profile" className="w-4 h-4" />
            <span>Profile</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold ">Customer details</h2>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between gap-4">
            <p>Email</p>
            <p className="font-semibold">
              {sender ? sender.id + "@gmail.com" : "amit@richpanel.com "}
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <p>Firstname</p>
            <p className="font-semibold">
              {sender ? sender.name.split(" ")[0] : "Amit"}
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <p>Lastname</p>
            <p className="font-semibold">
              {sender ? sender.name.split(" ")[1] : "Amit"}
            </p>
          </div>
        </div>
        <h3 className="text-blue-600 text-sm font-bold cursor-pointer">
          View more details
        </h3>
      </div>
    </div>
  );
}
