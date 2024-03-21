import React from "react";
import "./footer.css"


const Footer = (props) => {
    return (
        <div className="footer">
            <img src={props.languages} alt="languages"></img>
            <div className="arrows">
            <div className="arrow1"></div>
            <div className="arrow2"></div>
            <div className="arrow3"></div>
            </div>
            <img src={props.translator} alt="languages"></img>
            <div className="arrows">
            <div className="arrow1"></div>
            <div className="arrow2"></div>
            <div className="arrow3"></div>
            </div>
            <img src={props.learning} alt="languages"></img>
            
        </div>
    )
}


export default Footer;