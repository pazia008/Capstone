import React, { useState, createContext } from "react"

export const CategoryContext = createContext()

export const CategoryProvider = (props) => {
    const [catergories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8088/category")
        .then(res => res.json())
        .then(setCategories)
    }

    return (
        <CategoryContext.Provider value={{
            catergories, getCategories 
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}