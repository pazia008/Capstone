import React, { useContext, useEffect, useState } from "react"
import "./Trip.css"
import { useParams, useHistory } from "react-router-dom"
import { TripContext } from "./TripProvider"
import { CostContext } from "../cost/CostProvider"
import { PackContext } from "../pack/PackProvider"

//displays associateed ocst and packing details with specific trips 
//allows users to delete trips
//has buttons for adding more expenses and packing items

export const TripDetail = () => {
  const { getTripById, deleteTrip } = useContext(TripContext)
  const { getCosts, costs} = useContext(CostContext)
  const { getPacks, packs} = useContext(PackContext)

	const [trip, setTrip] = useState({})

	const {tripId} = useParams();
	const history = useHistory();

//deletes trips the sends users to the /trips link
    const handleRelease = () => {
        deleteTrip(trip.id)
          .then(() => {
            history.push("/trips")
          })
      }

      //getTripById will run after render
      //then is sets trip equal to response 
      //then it getsCosts and getPacks to run 

  useEffect(() => {
    getTripById(tripId)
    .then((response) => {
      setTrip(response)
    })
    .then(getCosts)
    .then(getPacks)
    }, [])

    //filters over costs and packing items to make sure they display with the correct trip
    const tripCosts = costs.filter(costObj => costObj.tripId === parseInt(tripId))

const tripPack = packs.filter(packObj => packObj.tripId === parseInt(tripId))


//this is what will display of the dom
  return (
    <section className="tripDetail">
        <div className="tripTitle">
      <h3 className="trip__location">{trip.location}</h3>
      <div className="trip__dateOfDeparture">Date of Departure: {trip.dateOfDeparture}</div>
      <div className="trip__returnDate">Return Date: {trip.returnDate}</div>
      <div className="trip__transportType">Type of Transportation: {trip.transportType}</div>
      <div className="trip__placeOfStay">Accommodation: {trip.placeOfStay}</div>
      </div>
      <div className="tripElements">
      <div className="costOfTrips">   
        <h3 className="trip__cost">Costs:</h3>
  <ul>{tripCosts.map(costObject => <li>{costObject.name}: ${costObject.cost}</li>)}</ul>
        <button onClick={() => {
            history.push(`/trips/costs/${trip.id}`)          
                }}>Add an Expense</button>
     </div>

     <div className="packForTrip">
        <h3 className="trip__pack">What to Pack:</h3>
  <ul>{tripPack.map(packObject => <li>{packObject.name}</li>)}</ul>
        <button onClick={() => {
            history.push(`/trips/packing/${trip.id}`)          
                }}>Need to Pack Something Else?</button>
     </div>
     </div>
     <button onClick={handleRelease}>Delete Trip</button>
    </section>
  )
}