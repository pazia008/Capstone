import React, { useContext, useEffect } from "react"
import "./Trip.css"
import { TripCard } from "./TripCard"
import { TripContext } from "./TripProvider"

export const TripList = () => {
    
  const { trips, getTrips } = useContext(TripContext)


  useEffect(() => {
    console.log("TripList: useEffect - getTrips")
    getTrips()
  }, [])

  //only displays trips with the associated user
const currentUserTrips = trips.filter(userTripObj => userTripObj.userId === parseInt(localStorage.getItem("travel_user")))


  return (
    <div className="trips">
      {console.log("TripList: Render", trips)}
      {
        currentUserTrips.map(trip => {
          return <TripCard key={trip.id} trip={trip}
           />
        })
      }
    </div>
  )


}