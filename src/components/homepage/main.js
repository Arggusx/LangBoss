import React from "react";
import './main.css';
import Country from "./country";
import data from "../../data";

export default function Main({ logo, name, slogan}) {

    const countries = data.map((country) => {
        return (
          <Country
            key={country.key} 
            country={country.country}
            name={country.name}
            translationBackground={country.translationBackground}
            background={country.background}
            description={country.description}
            review={country.review}
            months={country.months}
            stars={country.challenge}
            country1={country.country1}
            country2={country.country2}
            country3={country.country3}
            country4={country.country4}
            reachness={country.reachness}
            id={country.key}
          />
        );
      });

    return (
        <div className="Main">
            <div className="starting">
                <h2>Learn Languages immersing yourself</h2>
                <img className="culture" src="/img/homepage/border.png" alt="culture"></img>
                <h2 className="chooseLang">Choose The Language Below:</h2>
            </div>
            <div className="countries">
                {countries}
            </div>
        </div>
    )
}