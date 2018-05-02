import React from 'react';
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/link">Links</Link>
            </nav>
        </div>
    )
}
export default Header