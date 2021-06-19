import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const StoreContext = createContext()

export const initialState = {
    student: {
        items: []
    },
    isLogged: false
}


function StoreContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
