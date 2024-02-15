export default function LeftMessage() {
  return (
    <div className="flex flex-col gap-2 w-full px-4 my-2">
      <div className="flex gap-2 items-center ">
        <div className="w-6 h-6 rounded-full bg-black relative">
          <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 "></div>
        </div>
        <p className=" px-2 py-1 rounded-full bg-gray-100 shadow-lg ">
          Hi this is Left side
        </p>
      </div>
      <p className="text-sm px-2">
        <strong>Amit RG</strong> - Mar,05 2:22AM
      </p>
    </div>
  );
}
