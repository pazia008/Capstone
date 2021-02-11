import React, { useContext, useEffect } from "react"
import "./Trip.css"
import { TripCard } from "./TripCard"
import { TripContext } from "./TripProvider"

export const TripList = () => {
    
  const { trips, getTrips } = useContext(TripContext)

//getUsers will run after render
  useEffect(() => {
    getTrips()
  }, [])

  //only displays trips with the associated user
const currentUserTrips = trips.filter(userTripObj => userTripObj.userId === parseInt(localStorage.getItem("travel_user")))

//returns the current users trips
  return (
    <div className="trips">
      {
        currentUserTrips.map(trip => {
          return <TripCard key={trip.id} trip={trip}
           />
        })
      }
    </div>
  )


}