import { useEffect } from "react";
import { showAllPages } from "../../utils/page";
import { useRecoilState, useSetRecoilState } from "recoil";
import { fbPageAtom, fbPageIDAtom } from "../../store/atom";
import { userIDAtom } from "../../store/atom";
import { useRecoilValue } from "recoil";
import { getCookie } from "../../utils/auth";

const fbtoken = getCookie("fbtoken");

export default function ConnectFBPage() {
  const [fbPage, setFBPage] = useRecoilState(fbPageAtom);
  const setFBPageID = useSetRecoilState(fbPageIDAtom);
  const userID = useRecoilValue(userIDAtom);

  const goToDisconnectFBPage = () => {
    window.location.href = "/disconnectfbpage";
  };
  const gotoDashboard = () => {
    window.location.href = "/dashboard";
  };

  useEffect(() => {
    async function AllPages() {
      const data = await showAllPages({ userID, access_token: fbtoken });
      console.log(data);
      if (data.message === "success") {
        setFBPage(data.pageDetails);
      }
    }
    AllPages();
  }, [setFBPage, userID]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-800 ">
      <div className="flex flex-col items-center gap-4 max-w-[350px] min-w-[280px] sm:w-full p-5 sm:p-10 rounded-xl bg-white">
        <h1 className="text-lg font-semibold ">Facebook Page Integration</h1>
        {fbPage.length > 0
          ? fbPage.map((page) => (
              <button
                className="bg-blue-800 text-sm text-white w-full py-2 rounded-md hover:bg-blue-900"
                key={page.pageID}
                onClick={() => {
                  setFBPageID(page.pageID);
                  window.location.href = "/conversations";
                }}
              >
                {page.pageName}
              </button>
            ))
          : null}
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
