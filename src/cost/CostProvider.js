import React, { useState, createContext } from "react"

export const CostContext = createContext()

//allows me to use costs from my api
//allows me to add costs to my api

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