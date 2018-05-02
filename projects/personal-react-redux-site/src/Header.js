import React from "react"
import {Link} from "react-router-dom"

function Header (props){
    return (
        <div className="header">
            <h1>Weather Forecast</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/weather">Weather</Link>
            </nav>
        </div>
    )
}
export default Header