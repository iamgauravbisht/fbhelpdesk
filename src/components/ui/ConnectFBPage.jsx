import { useEffect } from "react";
import { showAllPages } from "../../utils/page";
import { getCookie } from "../../utils/auth";
import { useMyContext } from "../../store/context";

const fbtoken = getCookie("fbtoken");

export default function ConnectFBPage() {
  const { state, dispatch } = useMyContext();

  const goToDisconnectFBPage = () => {
    window.location.href = "/disconnectfbpage";
  };
  const gotoDashboard = () => {
    window.location.href = "/dashboard";
  };

  useEffect(() => {
    async function AllPages() {
      console.log(state.userID, "starting to call showallpages");
      const data = await showAllPages({
        userID: state.userID,
        access_token: fbtoken,
      });
      console.log(data);
      if (data.message === "success") {
        dispatch({ type: "SET_FB_PAGES", payload: data.pageDetails });
      }
    }
    AllPages();
  }, [dispatch, state.userID]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-800 ">
      <div className="flex flex-col items-center gap-4 max-w-[350px] min-w-[280px] sm:w-full p-5 sm:p-10 rounded-xl bg-white">
        <h1 className="text-lg font-semibold ">Facebook Page Integration</h1>
        {state.fbPage.length > 0
          ? state.fbPage.map((page) => (
              <button
                className="bg-blue-800 text-sm text-white w-full py-2 rounded-md hover:bg-blue-900"
                key={page.pageID}
                onClick={() => {
                  dispatch({ type: "SET_FB_PAGE_ID", payload: page.pageID });
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
