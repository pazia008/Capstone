import React from "react"
import { Route } from "react-router-dom"
import { TripForm } from "./trip/TripForm"
import { TripProvider } from "./trip/TripProvider"



export const ApplicationViews = () => {
    return (
        <>
        <TripProvider>
            <Route exact path="/tripform">
                <TripForm/>
            </Route>
        </TripProvider>
        </>

        
      
        )
        }