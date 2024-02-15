export default function DisconnectFBPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-800 ">
      <div className="flex flex-col items-center gap-4 max-w-[350px] min-w-[280px] sm:w-full p-5 sm:p-10 rounded-xl bg-white">
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <h1 className="text-lg font-semibold ">Facebook Page Integration</h1>
          <h2>
            Integrated Page : <strong>Amazon Business</strong>{" "}
          </h2>
        </div>

        <div className=" flex flex-col gap-1 w-full">
          <button className="bg-red-800 text-sm text-white w-full py-2 rounded-md hover:bg-red-900">
            Delete Integration
          </button>
          <button className="bg-blue-800 text-sm text-white w-full py-2 rounded-md hover:bg-blue-900">
            Reply to Messages
          </button>
        </div>
      </div>
    </div>
  );
}
