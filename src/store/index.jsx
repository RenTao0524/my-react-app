import React, { useReducer } from "react";
import initialState from "./state";
import reducer from "./reducer";

export const MyContext = React.createContext(null);

export default function ContextContainer(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props || {};
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
