import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  conversations: true,
  messages: false,
  profile: false,
  userID: "",
  fbPage: [],
  fbPageID: "",
};

// Define the context
export const MyContext = createContext();

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "SET_CONVERSATIONS":
      return { ...state, conversations: action.payload };
    case "SET_MESSAGES":
      return { ...state, messages: action.payload };
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "SET_USERID":
      return { ...state, userID: action.payload };
    case "SET_FBPAGE":
      return { ...state, fbPage: action.payload };
    case "SET_FBPAGEID":
      return { ...state, fbPageID: action.payload };
    default:
      return state;
  }
}

// Provider component
export function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}

// Prop validation
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
