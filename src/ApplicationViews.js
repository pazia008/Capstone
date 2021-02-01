import React from "react"
import { Route } from "react-router-dom"
import { TripForm } from "./trip/TripForm"
import { TripProvider } from "./trip/TripProvider"
import { UserProvider } from "./user/UserProvider"



export const ApplicationViews = () => {
    return (
        <>
        <TripProvider>
            <UserProvider>
            <Route exact path="/tripform">
                <TripForm/>
            </Route>
            </UserProvider>
        </TripProvider>
        </>

        
      
        )
        }