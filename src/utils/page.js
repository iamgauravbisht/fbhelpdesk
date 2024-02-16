export const showAllPages = async () => {
  return await fetch("http://localhost:3000/page/showallpages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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
