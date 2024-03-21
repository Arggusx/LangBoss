import React, { useState } from "react";
import "./dinamictranslator.css";
import Country1 from "./country1";
import Country2 from "./country2";
import { useLocation } from 'react-router-dom';



const Dinamictranslator = ({ name2, name1, nativeBackground, nativeTranslationBackground, isReversed, handleReverse }) => {


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const backgroundTranslation = queryParams.get("backgroundTranslation") || "";
    const background = queryParams.get("background") || "";
    
    

    const [text, setText] = useState(""); 
    

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const updateReceivedText = (newText) => {
        setText(newText);
    };

   

    return (
        <div className={`dinamicTranslator ${isReversed ? 'reversed' : ''}`}>
            <Country1 handleTextChange={handleChange} background={isReversed ? background : nativeBackground} translationBackground={isReversed ? backgroundTranslation :  nativeTranslationBackground} trashEraser={"/img/translator/trash-can.png"} reverseText="/img/translator/seta-reversa.png" updateReceivedText={updateReceivedText}/>
            <div className="languagesChoice">
                <div className="language1"><h3>{isReversed ? name2 : name1}</h3>
                </div>
                <button className="reverse" onClick={handleReverse}></button>
                <div className="language2"><h3>{isReversed ?  name1 : name2}</h3></div>
            </div>
            <Country2 receivedText={text} background={isReversed ? nativeBackground : background} translationBackground={isReversed ? nativeTranslationBackground : backgroundTranslation} /> 
            
        </div>
    );
};

export default Dinamictranslator;