import React, { useState, createContext } from "react"

export const PackContext = createContext()


export const PackProvider = (props) => {
    const [packs, setPacks] = useState([])

    const getPacks = () => {
        return fetch("http://localhost:8088/packing")
        .then(res => res.json())
        .then(setPacks)
    }

    const addPacks = costObj => {
        return fetch("http://localhost:8088/packing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(costObj)
        })
        .then(getPacks)
    
    }

    return (
        <PackContext.Provider value={{
            packs, getPacks, addPacks
        }}>
            {props.children}
        </PackContext.Provider>
    )
}