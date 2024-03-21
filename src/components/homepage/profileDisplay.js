import React, {useState} from "react";
import './profileDisplay.css'

export default function ProfileDisplay(props) {

    const [profileDisplay, setProfileDisplay] = useState(false)

    function handlelingDisplay() {
        setProfileDisplay(prevDisplay => !prevDisplay)
    }

    return (
        <div className="profile">

        <div className="profileIcon" onClick={handlelingDisplay}>
            <img className="profileImage" src="/img/loginIcons/usuario-masculino.png" alt="profileImage"></img>
        </div>

        <div className="profileDisplay" 

        style={{
            
            display : profileDisplay ? "block" : "none", 
            transitionDuration: "3s",
            
            
        }}>


        <div onClick={props.toggleDarkMode} >

        <div className="button" style={{backgroundImage: props.darkMode ? `url("/img/homepage/nightfall.png")` : `url("/img/homepage/sunrise.jpg")` }}>
            <button style={{marginLeft: props.darkMode ? "30px" : "0px"}} className="toggle">
                <img className="button-icon" src={props.darkMode ? "/img/homepage/moon(1).png" : "/img/homepage/sun(1).png"} alt="darkorlight" width="20" height="20"></img>
            </button>
        </div>

        </div>
        </div>
        </div>
    )
}