import React, { useContext, useEffect, useState } from "react"
import "./Trip.css"
import { useParams, useHistory } from "react-router-dom"
import { TripContext } from "./TripProvider"

export const TripDetail = () => {
  const { getTripById } = useContext(TripContext)

	const [trip, setTrip] = useState({})

	const {tripId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", tripId)
    getTripById(tripId)
    .then((response) => {
      setTrip(response)
    })
    }, [])

  return (
    <section className="trip">
      <h3 className="trip__location">{trip.location}</h3>
      <div className="trip__dateOfDeparture">Date Of Departure: {trip.dateOfDeparture}</div>
      <div className="trip__returnDate">Return Date: {trip.returnDate}</div>
      <div className="trip__transportType">Type Of Transportation: {trip.transportType}</div>
      <div className="trip__placeOfStay">Accommodation: {trip.placeOfStay}</div>
    </section>
  )
}