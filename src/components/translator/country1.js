import React, {useState} from "react";
import "./country1.css";

const Country1 = ({ handleTextChange, background, translationBackground, trashEraser, reverseText, updateReceivedText}) => {


    const [text, setText] = useState(""); 
   
    const handleTextErase = () => {
        setText("");
        updateReceivedText(""); 
    };

    const handleTextRestore = () => {
        setText("");
        updateReceivedText(""); 
    };


    return (
        <div className="country1">
        
        <div className="input1Background">
        
        <textarea maxLength="654" className="input1" placeholder="Enter your text here" onChange={(event) => {

                    handleTextChange(event); 
                    setText(event.target.value); 
                    updateReceivedText(event.target.value); 

        }} value={text}></textarea>
        <div>
        <img className="countryBackgroundTranslation" src={translationBackground} alt="translationBackground"></img>
        </div>
        </div>
        

        <div className="buttonsChangeText">

        <img className="reverseText" src={reverseText} alt="reverseText" onClick={handleTextRestore}></img>
        <img className="trashEraser" src={trashEraser} alt="trash" onClick={handleTextErase}></img>
      
        </div>
        <div>
        <img className="countryBackground" src={background} alt="background"></img>
        </div>
        </div>
    );
};

export default Country1;