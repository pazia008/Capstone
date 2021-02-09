import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"




export const Login = props => {

    const email = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)  //looking in the api for emails
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("travel_user", exists.id)  //pushing user to homepage if they exist
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }
//has the form for users to login and a link they can click on if they aren't a user to go to register
    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Travel Plan</h1>
                    <h2>Please sign in 😊</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-email"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link> 
            </section>
        </main>
        
    )
}