import { createContext, useReducer } from "react"
import darkModeReducer from "./darkModeReducer";

const INITIAL_STATE={

    darkMode:true
}

export const DarkModeContext=createContext(INITIAL_STATE);

export const DarkModeContextProvider=({children})=>{
    const [darkMode,dispatch]=useReducer(darkModeReducer,INITIAL_STATE);
    return(
        <DarkModeContext.Provider value={{darkMode,dispatch}}>
            {children}
        </DarkModeContext.Provider>
    )
}