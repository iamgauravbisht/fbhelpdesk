import { useEffect, useState } from "react";
import { signup } from "../../utils/auth";

export default function SignupForm() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  async function handleSignup(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = await signup(username, email, password);
    console.log(data);

    if (data.message === "success") {
      window.location.href = "/dashboard";
    }
    if (data.email || data.username || data.password) {
      setEmailError(data.email);
      setUsernameError(data.username);
      setPasswordError(data.password);
      alert("Error while signing up");
    }
  }

  useEffect(() => {
    if (document.cookie.includes("token")) {
      window.location.href = "/dashboard";
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-800 ">
      <div className="flex flex-col items-center gap-4 max-w-[350px] min-w-[280px] sm:w-full p-5 sm:p-10 rounded-xl bg-white">
        <h1 className="text-lg font-semibold ">Create Account</h1>
        <form className="text-sm font-medium w-full">
          <div className="flex flex-col mb-4 gap-0">
            <label htmlFor="username">
              Name
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                placeholder="Manoj Kumar"
                className="w-full px-2 py-1 outline-1 outline-blue-800 border border-gray-300 rounded-md "
              />
            </label>
            <small className="text-red-500 ml-3 text-[10px] w-fit ">
              {usernameError}
            </small>
          </div>
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
          <div className="flex  mb-4">
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
              onClick={(e) => handleSignup(e)}
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-[12px] font-medium">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-800">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
