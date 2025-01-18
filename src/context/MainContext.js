import { createContext, useRef } from "react";
import React from "react";

const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const scrollbarAccess = useRef(null);
  const setHeaderHeight = useRef(() => {});
  const scrollRef = useRef(null);

  return (
    <MainContext.Provider
      value={{ scrollbarAccess, setHeaderHeight, scrollRef }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext };
