import React, { useState, createContext } from "react"

export const TripContext = createContext()

export const TripProvider = (props) => {
    const [trips, setTrips] = useState([])


    const getTrips = () => {
        return fetch("http://localhost:8088/trips")
        .then(res => res.json())
        .then(setTrips)
    }



    const addTrips = tripObj => {
        return fetch("http://localhost:8088/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tripObj)
        })
        .then(getTrips)
    
    }


    return (
        <TripContext.Provider value={{
            trips, getTrips, addTrips
        }}>
            {props.children}
        </TripContext.Provider>
    )
}



