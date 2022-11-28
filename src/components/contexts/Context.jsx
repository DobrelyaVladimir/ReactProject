import React, { useState } from "react";
export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  
    return (
        <Context.Provider
            value={{
               
            }}
        >
            {children}
        </Context.Provider>
    );
}