import React, { useState, createContext } from "react"

export const PackContext = createContext()

//allows me to use packs from my api
//allows me to add new packing items to my api

export const PackProvider = (props) => {
    const [packs, setPacks] = useState([])

    const getPacks = () => {
        return fetch("http://localhost:8088/packs")
        .then(res => res.json())
        .then(setPacks)
    }

    const addPacks = costObj => {
        return fetch("http://localhost:8088/packs", {
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