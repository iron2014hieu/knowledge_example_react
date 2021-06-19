import React, { createContext } from 'react'

export const DemoContext = createContext()
function DemoContextProvider({ children }) {
    const value = {
        question: "What do you want?",
        animal: "Rabbit"
    }
    return (
        <DemoContext.Provider value={value}>
            {children}
        </DemoContext.Provider>
    )
}

export default DemoContextProvider
