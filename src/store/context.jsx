import { useContext } from "react";
import { MyContext } from "./provider";
// useContext hook
export function useMyContext() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
}
export default useMyContext;
