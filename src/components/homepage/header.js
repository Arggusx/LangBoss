import React from "react";
import './header.css'
import ProfileDisplay from "./profileDisplay";
import { Link } from "react-router-dom";

 const Header = (props) => {
    


    return (
    <div className="header" style={{
        backgroundColor: props.darkMode ? 'rgb(27, 26, 26)' : 'white',
        color: props.darkMode ? 'aliceblue' : 'rgb(27, 26, 26)'
    }}>
        <div className="symbol">
            <Link to="/" style={{ textDecoration: 'none'}}>
            <img src={props.logo} className="logo-1" alt="logocrown"></img>
            </Link>
            <h1 className="name-1">{props.name}</h1>
            <h3 className="slogan-1">{props.slogan}</h3>
        </div>
        <ProfileDisplay
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
        />
    </div>
    )
}

export default Header;