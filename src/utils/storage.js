const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};
const setDataInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
export {
  getDataFromLocalStorage,
  setDataInLocalStorage,
  removeFromLocalStorage,
};
