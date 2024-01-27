import { Children, createContext, useContext, useState } from "react";

const StateContext = createContext(0);

const initialState = {
    cart: false,
    chat: false,
    userProfile: false,
    notification:false,
}


export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu}}>
            {children}
        </StateContext.Provider>
    )
}

//  custom-hook that conntain a hook inside 
export const useStateContext = () =>  useContext(StateContext)
