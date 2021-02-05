import React from "react"
import { Route } from "react-router-dom"
import { CategoryForm } from "./cost/CategoryForm"
import { CategoryProvider } from "./cost/CategoryProvider"
import { CostProvider } from "./cost/CostProvider"
import { Home } from "./home/Home"
import { PackProvider } from "./pack/PackProvider"
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
                <CostProvider>
                    <CategoryProvider>
                        <PackProvider>
            <Route exact path="/tripform">
                <TripForm/>
            </Route>

            <Route exact path="/trips">
                <TripList/>
            </Route>

            <Route exact path="/trips/detail/:tripId(\d+)">
                <TripDetail/>
            </Route>

            <Route exact path="/trips/costs/:tripId(\d+)">
                <CategoryForm/>
            </Route>

                        </PackProvider>
                    </CategoryProvider>
                </CostProvider>
            </UserProvider>
        </TripProvider>


        </>

        
      
        )
        }