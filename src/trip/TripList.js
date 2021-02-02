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


  return (
    <div className="trips">
      {console.log("TripList: Render", trips)}
      {
        trips.map(trip => {
          return <TripCard key={trip.id} trip={trip} />
        })
      }
    </div>
  )
}