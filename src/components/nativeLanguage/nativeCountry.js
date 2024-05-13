import React from "react";
import './nativeCountry.css'
import { Link } from 'react-router-dom'; 

const NativeCountry = ({nativeCountry, id, name, translationBackground, background, stars, review, reachness, months, description, country1, country2, country3, country4}) => {
    return (
        <div key={id} className="nativeCountry">
            <Link 
            
            to={`/homepage/?nativeCountryName=${encodeURIComponent(name)}
            &nativeBackgroundTranslation=${encodeURIComponent(translationBackground)}
            &nativeBackground=${encodeURIComponent(background)}
            &nativeDescription=${encodeURIComponent(description)}
            &nativeStars=${encodeURIComponent(stars)}
            &nativeReview=${encodeURIComponent(review)}
            &nativeReachness=${encodeURIComponent(reachness)}
            &nativeMonths=${encodeURIComponent(months)}
            &nativeCountry1=${encodeURIComponent(country1)}
            &nativeCountry2=${encodeURIComponent(country2)}
            &nativeCountry3=${encodeURIComponent(country3)}
            &nativeCountry4=${encodeURIComponent(country4)}
            `}> 
            <img className="nativeCountry-image" src={nativeCountry} alt="country" ></img>
            <h3 className="nativeCountry-name">{name}</h3>
            <img className="nativeTranslationBackground" src={translationBackground} alt="translation.background"></img>
            <img className="nativebackground" src={background} alt="background"></img>
            <p className="nativeDescriptionHere">{description}</p>
            <p className="nativeStarsHere">{stars}</p>
            <p className="nativeReviewHere">{review}</p>
            <h3 className="nativeReachness">{reachness}</h3>
            <h3 className="nativeMonthsHere">{months}</h3>
            <img className="nativeCountry1Here" src={country1} alt="country1"></img>
            <img className="nativeCountry2Here" src={country2} alt="country2"></img>
            <img className="nativeCountry3Here" src={country3} alt="country3"></img>
            <img className="nativeCountry4Here" src={country4} alt="country4"></img>
            </Link>
        </div>
    )
}

export default NativeCountry;