import { createContext, useRef } from "react";


const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const scrollbarAccess = useRef(null);
  const setHeaderHeight = useRef(() => { });


  return (
    <MainContext.Provider
      value={{ scrollbarAccess, setHeaderHeight }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext };
