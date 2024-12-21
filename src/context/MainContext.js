import { createContext, useRef } from "react";
import React from 'react';

const MainContext = createContext();  

export default function MainContextProvider({ children }) {
    const scrollbarAccess = useRef(null);   
 
     return (
         <MainContext.Provider value={{ scrollbarAccess }}>
            {children}
        </MainContext.Provider>
    );
}

export { MainContext };
