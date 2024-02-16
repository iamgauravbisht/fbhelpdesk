import logo from "../../assets/logo.svg";
import inbox from "../../assets/inbox.svg";
import people from "../../assets/people.svg";
import stockup from "../../assets/stockup.svg";

export default function Sidebar() {
  const goToConnectFBPage = () => {
    window.location.href = "/connectfbpage";
  };
  const goToDisconnectFBPage = () => {
    window.location.href = "/disconnectfbpage";
  };

  return (
    <div className="absolute bottom-0 flex w-full h-14 justify-between items-center pr-2 bg-blue-800 sm:flex-col sm:w-14 sm:h-full sm:py-2 sm:px-0 sm:static z-20">
      <div className="flex items-center h-full sm:h-fit sm:w-full sm:flex-col ">
        <div className="flex items-center justify-center h-full py-2 px-4 sm:px-2 sm:py-4 sm:w-full">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center h-full py-2 px-4 bg-white sm:px-2 sm:py-4 sm:w-full ">
          <img src={inbox} alt="logo" />
        </div>
        <div
          className="flex flex-col items-center justify-center h-full py-2 px-4 sm:px-2 sm:py-4 sm:w-full cursor-pointer"
          onClick={goToConnectFBPage}
        >
          <img src={people} alt="logo" />
          <p className="text-[10px] text-center leading-none text-white">
            Connect Page
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center h-full py-2 px-4 sm:px-2 sm:py-4 sm:w-full cursor-pointer"
          onClick={goToDisconnectFBPage}
        >
          <img src={stockup} alt="logo" />
          <p className="text-[10px] text-center leading-none text-white">
            Disconnect Page
          </p>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-white relative">
        <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 "></div>
      </div>
    </div>
  );
}
