import React from "react";
import useContext from "./useContext";
import { useState } from "react";

const useContextProvider = ({children})=>{
    const[user,setUser] = useState(null);
    return(
        <useContext.Provider value={{user,setUser}}>
            {children}
        </useContext.Provider>
    );
}

export default useContextProvider;

