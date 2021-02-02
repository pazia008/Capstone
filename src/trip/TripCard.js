import React from "react"

import "./Trip.css"

export const TripCard = ({trip}) => (
    <section className="trip">
        <h3 className="trip__location">{trip.location}</h3>
    </section>
)