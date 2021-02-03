import React, { useState, createContext } from "react"

export const CostContext = createContext()


export const CostProvider = (props) => {
    const [costs, setCosts] = useState([])

    const getCosts = () => {
        return fetch("http://localhost:8088/costs")
        .then(res => res.json())
        .then(setCosts)
    }

    return (
        <CostContext.Provider value={{
            costs, getCosts 
        }}>
            {props.children}
        </CostContext.Provider>
    )
}