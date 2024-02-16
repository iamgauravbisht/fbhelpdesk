const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};
const setDataInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

const setInitialData = () => {
  setDataInLocalStorage("userID", "");
  setDataInLocalStorage("fbPage", []);
  setDataInLocalStorage("fbPageID", "");
};

export {
  getDataFromLocalStorage,
  setDataInLocalStorage,
  removeFromLocalStorage,
  setInitialData,
};
