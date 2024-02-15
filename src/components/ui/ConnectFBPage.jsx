export default function ConnectFBPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-800 ">
      <div className="flex flex-col items-center gap-4 max-w-[350px] min-w-[280px] sm:w-full p-5 sm:p-10 rounded-xl bg-white">
        <h1 className="text-lg font-semibold ">Facebook Page Integration</h1>
        <button className="bg-blue-800 text-sm text-white w-full py-2 rounded-md hover:bg-blue-900">
          Connect Page
        </button>
      </div>
    </div>
  );
}
