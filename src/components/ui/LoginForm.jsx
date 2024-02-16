import { useEffect, useState } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import { fbAuth, signin, setCookie, eraseCookie } from "../../utils/auth";

export default function Loginform() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authResponse, setAuthResponse] = useState({});

  function handleSuccess(response) {
    console.log(response);
    setAuthResponse(response.authResponse);
  }
  useEffect(() => {
    if (authResponse == {}) return;

    const FBAuth = async (response) => {
      await fbAuth(response.accessToken, response.userID).then((data) => {
        if (data.message === "success") {
          eraseCookie("fbtoken");
          setCookie("fbtoken", response.accessToken, response.expiresIn);
          // window.location.href = "/dashboard";
        }
      });
    };

    FBAuth(authResponse);
  }, [authResponse]);

  function handleError(error) {
    console.log(error);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = await signin(email, password);
    console.log(data);

    if (data.message === "success") {
      window.location.href = "/FBLogin";
    }
    if (data.email || data.password) {
      setEmailError(data.email);
      setPasswordError(data.password);
      alert("Error while signing up");
    }
  }

  useEffect(() => {
    if (document.cookie.includes("token") && document.cookie.includes("fb")) {
      window.location.href = "/dashboard";
    }
    if (!document.cookie.includes("fb")) {
      window.location.href = "/FBLogin";
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-800 ">
      <div className="flex flex-col items-center gap-4 max-w-[350px] min-w-[280px] sm:w-full p-5 sm:p-10 rounded-xl bg-white">
        <h1 className="text-lg font-semibold ">Log in to your account</h1>
        <form className="text-sm font-medium w-full">
          <div className="flex flex-col mb-4 gap-0">
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="manoj@richpanel.com"
                className="w-full px-2 py-1 outline-1 outline-blue-800 border border-gray-300 rounded-md "
              />
            </label>
            <small className="text-red-500 ml-3 text-[10px] w-fit ">
              {emailError}
            </small>
          </div>
          <div className="flex flex-col mb-4 gap-0">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                placeholder="********"
                className="w-full px-2 py-1 outline-1 outline-blue-800 border border-gray-300 rounded-md "
              />
            </label>
            <small className="text-red-500 ml-3 text-[10px] w-fit ">
              {passwordError}
            </small>
          </div>
          <div className="flex  mb-4 ">
            <label
              htmlFor="remember"
              className="text-[12px] font-medium flex items-center gap-1"
            >
              <input type="checkbox" name="remember" id="remember" />
              Remember me
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-800 text-white w-full py-2 rounded-md hover:bg-blue-900"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </div>
        </form>
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
        <p className="text-[12px] font-medium">
          New to MyApp?{" "}
          <a href="/signup" className="text-blue-800">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
