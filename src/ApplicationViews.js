import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { TripDetail } from "./trip/TripDetail"
import { TripForm } from "./trip/TripForm"
import { TripList } from "./trip/TripList"
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
                <TripList/>
            </Route>

            <Route exact path="/trips/detail/:tripId(\d+)">
                <TripDetail/>
            </Route>

            </UserProvider>
        </TripProvider>
        </>

        
      
        )
        }