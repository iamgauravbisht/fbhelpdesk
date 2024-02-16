export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

export function handleError(errorMsg) {
  const error = {};
  if (errorMsg.includes("Email")) {
    error.email = "Email already exists";
  }
  if (errorMsg.includes("Incorrect")) {
    error.email = "Incorrect email";
  }
  if (errorMsg.includes("user")) {
    error.username = "User not found";
  }
  if (errorMsg.includes("Password")) {
    error.password = "Incorrect password";
  }
  return error;
}

export const signup = async (username, email, password) => {
  return await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "User created successfully") {
        setCookie("token", data.token, 7);
        return { message: "success" };
      }
      if (data.message.includes("Error")) {
        return handleError(data.message);
      }
    })
    .catch((err) => console.log(err));
};
export const signin = async (email, password) => {
  return await fetch("http://localhost:3000/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message.includes("Error")) {
        return handleError(data.message);
      }
      if (data.message === "success") {
        setCookie("token", data.token, 7);
        return { message: "success" };
      }
    })
    .catch((err) => console.log(err));
};

export const signout = () => {
  eraseCookie("token");
};

// fb auth
export const fbAuth = async (userID) => {
  return await fetch("http://localhost:3000/auth/fbauth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: userID,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message.includes("success")) {
        return { message: "success" };
      } else {
        throw new Error(data.message);
      }
    })
    .catch((err) => console.log(err));
};
