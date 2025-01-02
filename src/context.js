import {  useContext } from "react";
//in this project I didn't see necessary to use context or react router just implemented these to see i can do it anyway


const AppContext=React.createContext()

const AppProvider=({children})=>{
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}


export  {AppContext,AppProvider}