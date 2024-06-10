import React, { useState } from "react";
import "./dinamictranslator.css";
import Country1 from "./country1";
import Country2 from "./country2";
import { useLocation } from 'react-router-dom';

const Dinamictranslator = ({ name2, name1, short_name2, short_name1, nativeBackground, nativeTranslationBackground, isReversed, handleReverse }) => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const backgroundTranslation = queryParams.get("backgroundTranslation") || "";
    const background = queryParams.get("background") || "";
    const [text, setText] = useState("");
    const [sourceText, setSourceText] = useState("");
    const waitTime = 1000;

    
    let timer;

    useEffect(() => {
        if (sourceText) {
            updateReceivedText(sourceText);
        }
    }, [isReversed]);

    const updateReceivedText = (newText) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fetch(
          `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${isReversed ? short_name2 : short_name1}&tl=${isReversed ? short_name1 : short_name2}&dt=t&q=${encodeURIComponent(newText)}`,
        ).then((res) => {
          res.json().then((data) => {
              let translatedText = "";
            /* Percorre o array data do Promise e atribui as palavras do
               idioma de destino de cada array (array dentro de outro array)
               para translatedText. */
            for (let i in data[0]) {
              translatedText += data[0][i][0];
            }
            setText(translatedText);
          });
        });
      }, waitTime);
    };

      const handleTextChange = (newText) => {
        setSourceText(newText);
        updateReceivedText(newText);
    };

       const handleReverseClick = () => {
        handleReverse();
        setSourceText(text); 
    };


    return (
        <div className={`dinamicTranslator ${isReversed ? 'reversed' : ''}`}>
            <Country1 background={isReversed ? background : nativeBackground} translationBackground={isReversed ? backgroundTranslation :  nativeTranslationBackground} trashEraser={"/img/translator/trash-can.png"} reverseText="/img/translator/seta-reversa.png" updateReceivedText={updateReceivedText}/>
            <div className="languagesChoice">
                <div className="language1"><h3>{isReversed ? name2 : name1}</h3></div>
                <button className="reverse" onClick={handleReverse}></button>
                <div className="language2"><h3>{isReversed ?  name1 : name2}</h3></div>
            </div>
            <Country2 receivedText={text} background={isReversed ? nativeBackground : background} translationBackground={isReversed ? nativeTranslationBackground : backgroundTranslation} />
        </div>
    );
};

export default Dinamictranslator;
