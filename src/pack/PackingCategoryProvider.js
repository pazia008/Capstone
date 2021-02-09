import React, { useState, createContext } from "react"

export const PackingCategoryContext = createContext()

//allows me to use packingCateogry from my api
export const PackingCategoryProvider = (props) => {
    const [packCategories, setPackCategories] = useState([])

    const getPackingCategories = () => {
        return fetch("http://localhost:8088/packingCategories")
        .then(res => res.json())
        .then(setPackCategories)
    }


    return (
        <PackingCategoryContext.Provider value={{
            packCategories, getPackingCategories
        }}>
            {props.children}
        </PackingCategoryContext.Provider>
    )
}