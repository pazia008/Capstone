import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import {Logout} from "../Logout"

//helps users navigate through the app

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">About</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tripform">Trip Form</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__trips" to="/trips">Saved Trips</Link>
            </li>
            <li className="navbar__item">
                <button className="logout-button" onClick={Logout()}>Logout</button>
            </li>
        </ul>
    )
}
