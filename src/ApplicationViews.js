import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { TripCard } from "./trip/TripCard"
import { TripForm } from "./trip/TripForm"
import { TripProvider } from "./trip/TripProvider"
import { UserProvider } from "./user/UserProvider"



export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <Home />
            </Route>

        <TripProvider>
            <UserProvider>

            <Route exact path="/tripform">
                <TripForm/>
            </Route>

            <Route exact path="/trips">
                <TripCard/>
            </Route>

            </UserProvider>
        </TripProvider>
        </>

        
      
        )
        }