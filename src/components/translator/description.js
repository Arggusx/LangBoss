import React from "react";
import "./description.css"

const Description = ({isReversed, data1, name, description, nativeName, nativeDescription }) => {
    return (
            <div className="languageDescription">
                <h3 className="language">{isReversed ? nativeName : name}</h3>
                <div className="languageHistory">
                    <img className="descriptionImage" src={data1} alt="descriptionLanguage"></img>
                    <div className="textHistory"><p className="description">{isReversed? nativeDescription : description}</p></div>
                </div>  
            </div>
    )
}

export default Description;
