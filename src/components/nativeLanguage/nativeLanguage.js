import React, {useState, useEffect} from "react";
import './nativeLanguage.css'
import NativeCountry from "./nativeCountry";
import data from '../../data'
import ProfileDisplay from "../homepage/profileDisplay";

function NativeLanguage() {


    const nativeCountries = data.map((country) => {

        return (
          <NativeCountry
            nativeCountry={country.country}
            name={country.name}
            id={country.key}
            background={country.background}
            translationBackground={country.translationBackground}
            description={country.description}
            stars={country.challenge}
            review={country.review}
            reachness={country.reachness}
            months={country.months}
            country1={country.country}
            country2={country.country2}
            country3={country.country3}
            country4={country.country4}
          />
        );
      });

      const [darkMode, setDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? JSON.parse(storedTheme) : false;
      });
    
      useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(darkMode));
      }, [darkMode]);
    
      const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
      };

    return (
        <div className="nativeLanguage" style={{
          backgroundColor: darkMode ? "rgb(27, 26, 26)" : "white",
          color: darkMode ? "aliceblue" : "rgb(27, 26, 26)",}}>
            <div className="nativeSymbol">
                <div className="profileDisplayNative"><ProfileDisplay toggleDarkMode={toggleDarkMode} darkMode={darkMode}/></div>
                <div className="symbol">
                    <img className="logo" src="/img/homepage/crown.png" alt="crownlogo"></img>
                    <h1 className="name">LangBoss</h1>
                    <h3 className="slogan">Discovering seas</h3>
                </div>
            </div>
            <h1 className="choiceNativeLanguage">Welcome! What is your native language?</h1>
            <div className="nativeCountries">{nativeCountries}</div>
        </div>
    )
}

export default NativeLanguage;