import React, { useState, createContext } from "react"

export const CategoryContext = createContext()

export const CategoryProvider = (props) => {
    const [catergories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8088/category")
        .then(res => res.json())
        .then(setCategories)
    }

    const addCategories = categoryObj => {
        return fetch("http://localhost:8088/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryObj)
        })
        .then(getCategories)
    
    }

    return (
        <CategoryContext.Provider value={{
            catergories, getCategories, addCategories 
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}