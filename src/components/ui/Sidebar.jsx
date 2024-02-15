import logo from "../../assets/logo.svg";
import inbox from "../../assets/inbox.svg";
import people from "../../assets/people.svg";
import stockup from "../../assets/stockup.svg";

export default function Sidebar() {
  return (
    <div className="absolute bottom-0 flex w-full h-14 justify-between items-center pr-2 bg-blue-800 sm:flex-col sm:w-14 sm:h-full sm:py-2 sm:px-0 sm:static z-20">
      <div className="flex items-center h-full sm:h-fit sm:w-full sm:flex-col ">
        <div className="flex items-center justify-center h-full py-2 px-4 sm:px-2 sm:py-4 sm:w-full">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center h-full py-2 px-4 bg-white sm:px-2 sm:py-4 sm:w-full ">
          <img src={inbox} alt="logo" />
        </div>
        <div className="flex items-center justify-center h-full py-2 px-4 sm:px-2 sm:py-4 sm:w-full">
          <img src={people} alt="logo" />
        </div>
        <div className="flex items-center justify-center h-full py-2 px-4 sm:px-2 sm:py-4 sm:w-full">
          <img src={stockup} alt="logo" />
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-white relative">
        <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 "></div>
      </div>
    </div>
  );
}
