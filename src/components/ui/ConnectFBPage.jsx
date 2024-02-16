export default function ConnectFBPage() {
  const goToDisconnectFBPage = () => {
    window.location.href = "/disconnectfbpage";
  };
  const gotoDashboard = () => {
    window.location.href = "/dashboard";
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-800 ">
      <div className="flex flex-col items-center gap-4 max-w-[350px] min-w-[280px] sm:w-full p-5 sm:p-10 rounded-xl bg-white">
        <h1 className="text-lg font-semibold ">Facebook Page Integration</h1>
        <button className="bg-blue-800 text-sm text-white w-full py-2 rounded-md hover:bg-blue-900">
          Connect Page
        </button>
        <div className="flex gap-2 justify-center w-full">
          <button
            className="bg-red-800 text-sm text-white w-full py-2 rounded-md hover:bg-red-900"
            onClick={goToDisconnectFBPage}
          >
            disconnect-Page
          </button>
          <button
            className="bg-blue-800 text-sm text-white w-full py-2 rounded-md hover:bg-blue-900"
            onClick={gotoDashboard}
          >
            dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
