import React, { useContext, useEffect, useState } from "react"
import "./Trip.css"
import { useHistory } from "react-router-dom";
import { TripContext } from "./TripProvider";
import { UserContext } from "../user/UserProvider";

export const TripForm = () => {
    const { addTrips } = useContext(TripContext)
    const { getUsers} = useContext(UserContext)

    


    const [trip, setTrip] = useState({
        userId: parseInt(localStorage.getItem('travel_user')),
        location: "",
        dateOfDeparture: "",
        returnDate: "",
        transportType: "",
        placeOfStay: ""
    });

    const history = useHistory();

    useEffect(() => {
        getUsers()
      }, [])

//makes a new trip
    const handleControlledInputChange = (event) => {
      const newTrip = { ...trip }

      let selectedVal = event.target.value

      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newTrip[event.target.id] = selectedVal
      setTrip(newTrip)
    }

    const handleClickSaveTrip = (event) => {

      event.preventDefault() 

        addTrips(trip)
        .then(() => history.push("/trips"))
      }
    
//the form on the dom that users will fill out to make a new trip
    return (
      <form className="tripForm">
          <h2 className="tripForm__title">New Trip!</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location" value={trip.location}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="dateOfDeparture">Date of Departure:</label>
                  <input type="text" id="dateOfDeparture" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Date of Departure" value={trip.dateOfDeparture}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="returnDate">Return Date:</label>
                  <input type="text" id="returnDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Return Date" value={trip.returnDate}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="transportType">Type of Transportation:</label>
                  <input type="text" id="transportType" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Type of Transportation" value={trip.transportType}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="placeOfStay">Accommodation:</label>
                  <input type="text" id="placeOfStay" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Accommodation" value={trip.placeOfStay}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={ handleClickSaveTrip }>
            Save Trip!
          </button>
      </form>
    )
}