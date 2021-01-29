import React from "react"
import { Route } from "react-router-dom"
import { TripForm } from "./trip/TripForm"



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <TripForm/>
            </Route>
        </>

        
      
        )
        }