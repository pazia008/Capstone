import React from "react"
import { Link } from "react-router-dom"
import "./Trip.css"

//sets what the trips will look like on the dom
export const TripCard = ({trip}) => (
    <section className="trip">
        <h3 className="trip__location"><Link to={`/trips/detail/${trip.id}`}>
          { trip.location }
        </Link>
        </h3>
    </section>
)