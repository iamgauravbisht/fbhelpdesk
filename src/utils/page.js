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

export const getConversations = async ({ pageID, fbPageToken, userID }) => {
  return await fetch("http://localhost:3000/page/getconversations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageID: pageID,
      pageAccessToken: fbPageToken,
      userID: userID,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message.includes("success")) {
        return data.conversations;
      } else {
        throw new Error(data.message);
      }
    })
    .catch((err) => console.log(err));
};

export const getComments = async ({ pageID, fbPageToken, userID }) => {
  return await fetch("http://localhost:3000/page/getcomments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageID: pageID,
      pageAccessToken: fbPageToken,
      userID: userID,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message.includes("success")) {
        console.log("comments: ", data.comments);
        return data.comments;
      } else {
        throw new Error(data.message);
      }
    })
    .catch((err) => console.log(err));
};
export const getMessages = async ({ pageID, fbPageToken, userID }) => {
  return await fetch("http://localhost:3000/page/getmessages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageID: pageID,
      pageAccessToken: fbPageToken,
      userID: userID,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message.includes("success")) {
        return data.messages;
      } else {
        throw new Error(data.message);
      }
    })
    .catch((err) => console.log(err));
};

// reply to a message
export const replyToMessage = async ({
  pageID,
  pageAccessToken,
  recipientPSID,
  message,
  messageThreadID,
  participants,
}) => {
  return await fetch("http://localhost:3000/page/replymessages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageID: pageID,
      pageAccessToken: pageAccessToken,
      recipientPSID: recipientPSID,
      message: message,
      messageThreadID: messageThreadID,
      participants: participants,
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
//reply to a comment
export const replyToComment = async ({
  pageAccessToken,
  commentID,
  message,
}) => {
  return await fetch("http://localhost:3000/page/replycomments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageAccessToken: pageAccessToken,
      commentID: commentID,
      message: message,
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
export const getSelectedConversation = async ({
  pageID,
  pageAccessToken,
  messageThreadID,
  participants,
}) => {
  return await fetch("http://localhost:3000/page/getselectedconversation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageID: pageID,
      pageAccessToken: pageAccessToken,
      messageThreadID: messageThreadID,
      participants: participants,
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
