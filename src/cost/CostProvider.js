import React, { useState, createContext } from "react"

export const CostContext = createContext()


export const CostProvider = (props) => {
    const [costs, setCosts] = useState([])

    const getCosts = () => {
        return fetch("http://localhost:8088/costs")
        .then(res => res.json())
        .then(setCosts)
    }

    const addCosts = costObj => {
        return fetch("http://localhost:8088/costs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(costObj)
        })
        .then(getCosts)
    
    }

    return (
        <CostContext.Provider value={{
            costs, getCosts, addCosts
        }}>
            {props.children}
        </CostContext.Provider>
    )
}