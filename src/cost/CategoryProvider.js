import React, { useState, createContext } from "react"

export const CategoryContext = createContext()

//allows me to use cost catergories from my api

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8088/categories")
        .then(res => res.json())
        .then(setCategories)
    }


    return (
        <CategoryContext.Provider value={{
            categories, getCategories
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}