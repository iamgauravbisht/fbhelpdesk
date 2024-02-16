export const showAllPages = async ({ userID, access_token }) => {
  return await fetch("http://localhost:3000/page/showallpages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: userID,
      access_token: access_token,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message.includes("success")) {
        return data;
      } else {
        throw new Error(data.message);
      }
    })
    .catch((err) => console.log(err));
};
