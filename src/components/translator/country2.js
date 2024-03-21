import React from "react";
import "./country2.css";

const Country2 = ({ receivedText, background, translationBackground }) => {
    

    
    return (
        <div className="country2" >

        <div className="input2Background">
            <p className="input2">{receivedText}</p>
            <div>
            <img className="nativeCountryBackgroundTranslation" src={translationBackground} alt="translationBackground"></img>
            </div>
        </div>

        <img className="nativeCountryBackground" src={background} alt="background"></img>
        </div>
    );
};

export default Country2;