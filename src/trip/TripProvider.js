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



    const getTripById = (id) => {
        return fetch(`http://localhost:8088/trips/${id}`)
            .then(res => res.json())
    }



    const deleteTrip = tripId => {
        return fetch(`http://localhost:8088/trips/${tripId}`, {
            method: "DELETE"
        })
            .then(getTrips)
    }

    return (
        <TripContext.Provider value={{
            trips, getTrips, addTrips, getTripById, deleteTrip
        }}>
            {props.children}
        </TripContext.Provider>
    )
}



