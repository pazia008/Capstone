import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Travel.css";


//displays navbar and application views
//sets the route for login and register
export const Travel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("travel_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/register">
      <Register />
    </Route>
  </>
);