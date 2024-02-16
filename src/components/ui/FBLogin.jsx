import { FacebookProvider, LoginButton } from "react-facebook";
import { fbAuth, setCookie, eraseCookie } from "../../utils/auth";
import { useEffect, useState } from "react";
import { userIDAtom } from "../../store/atom";
import { useSetRecoilState } from "recoil";

export default function FBLogin() {
  const [authResponse, setAuthResponse] = useState({});
  const setUserID = useSetRecoilState(userIDAtom);

  function handleSuccess(response) {
    console.log(response);
    setAuthResponse(response.authResponse);
  }

  useEffect(() => {
    if (authResponse == {}) return;
    const FBAuth = async (response) => {
      await fbAuth(response.accessToken, response.userID).then((data) => {
        if (data.message === "success") {
          setUserID(response.userID);
          eraseCookie("fbtoken");
          setCookie("fbtoken", response.accessToken, response.expiresIn);
          window.location.href = "/dashboard";
        }
      });
    };
    FBAuth(authResponse);
  }, [authResponse, setUserID]);

  function handleError(error) {
    console.log(error);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-800 ">
      <div className="flex flex-col items-center gap-4 max-w-[350px] min-w-[280px] sm:w-full p-5 sm:p-10 rounded-xl bg-white">
        <h1 className="text-lg font-semibold ">Facebook Login Integration</h1>
        <div className="w-full">
          <FacebookProvider appId="381913067780369">
            <LoginButton
              onError={handleError}
              onSuccess={handleSuccess}
              className="bg-blue-800 text-white w-full py-2 font-semibold text-sm rounded-md hover:bg-blue-900"
            >
              Login via Facebook
            </LoginButton>
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
}
