export default function RightMessage({ message, name }) {
  return (
    <div className="flex flex-col justify-end gap-2 w-full px-4 my-2 items-end">
      <div className="flex gap-2 items-center ">
        <p className=" px-2 py-1 rounded-full bg-gray-100 shadow-lg ">
          {message.message}
        </p>
        <div className="w-6 h-6 rounded-full bg-black relative">
          <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 "></div>
        </div>
      </div>
      <p className="text-sm px-2">
        <strong> {name}</strong> -{" "}
        {new Date(message.created_time).toLocaleString()}
      </p>
    </div>
  );
}
