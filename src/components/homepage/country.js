import React, {useState} from "react";
import { Link } from 'react-router-dom'; 
import './country.css';
import { useLocation } from "react-router-dom"


const Country = ({ country, name, id, translationBackground, background, country1, country2, country3, country4, description, stars, review, months, reachness }) => {

    const [currentCountry, setCurrentCountry] = useState({ name, id, translationBackground, background, country1, country2, country3, country4, description, stars, review, months, reachness});
  
    const handleClick = () => {
    setCurrentCountry({name, id, translationBackground, background, country1, country2, country3, country4, description, stars, review, months, reachness});
    console.log(`Current Country: ${currentCountry.name}, ID: ${currentCountry.id}, translationBackground: ${currentCountry.translationBackground}` );
    };

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const nativeCountryName = searchParams.get("nativeCountryName") || "";
    const nativeBackgroundTranslation = searchParams.get("nativeBackgroundTranslation") || "";
    const nativeBackground = searchParams.get("nativeBackground") || "";
    const nativeDescription= searchParams.get("nativeDescription") || "";
    const nativeReview= searchParams.get("nativeReview") || "";
    const nativeStars = searchParams.get("nativeStars") || "";
    const nativeReachness = searchParams.get("nativeReachness") || "";
    const nativeMonths = searchParams.get("nativeMonths") || "";
    const nativeCountry1 = searchParams.get("nativeCountry1") || "";
    const nativeCountry2 = searchParams.get("nativeCountry2") || "";
    const nativeCountry3 = searchParams.get("nativeCountry3") || "";
    const nativeCountry4 = searchParams.get("nativeCountry4") || "";
    

  
    return (
      <div key={id} className="country" onClick={handleClick}>

        <Link 
        
        to={`/translator/?country=${encodeURIComponent(name)}
        &backgroundTranslation=${encodeURIComponent(translationBackground)}
        &background=${encodeURIComponent(background)}
        &description=${encodeURIComponent(description)}
        &stars=${encodeURIComponent(stars)}
        &review=${encodeURIComponent(review)}
        &months=${encodeURIComponent(months)}
        &country1=${encodeURIComponent(country1)}
        &country2=${encodeURIComponent(country2)}
        &country3=${encodeURIComponent(country3)}
        &country4=${encodeURIComponent(country4)}
        &reachness=${encodeURIComponent(reachness)}
        &nativeCountryNameImport=${encodeURIComponent(nativeCountryName)}
        &nativeBackgroundTranslationImport=${encodeURIComponent(nativeBackgroundTranslation)}
        &nativeBackgroundImport=${encodeURIComponent(nativeBackground)}
        &nativeDescriptionImport=${encodeURIComponent(nativeDescription)}
        &nativeReviewImport=${encodeURIComponent(nativeReview)}
        &nativeStarsImport=${encodeURIComponent(nativeStars)}
        &nativeReachnessImport=${encodeURIComponent(nativeReachness)}
        &nativeMonthsImport=${encodeURIComponent(nativeMonths)}
        &nativeCountry1Import=${encodeURIComponent(nativeCountry1)}
        &nativeCountry2Import=${encodeURIComponent(nativeCountry2)}
        &nativeCountry3Import=${encodeURIComponent(nativeCountry3)}
        &nativeCountry4Import=${encodeURIComponent(nativeCountry4)}
        
        `}>
          <img className="country-image" src={country} alt="country" />
          <h3 className="country-name">{name}</h3>
          <img className="translationBackground" src={translationBackground} alt="translation.background"></img>
          <img className="background" src={background} alt="background"></img>
          <p className="descriptionHere">{description}</p>
          <p className="starsHere">{stars}</p>
          <p className="reviewHere">{review}</p>
          <h3 className="reachness2">{reachness}</h3>
          <h3 className="monthsHere">{months}</h3>
          <img className="country1Here" src={country1} alt="country1"></img>
          <img className="country2Here" src={country2} alt="country2"></img>
          <img className="country3Here" src={country3} alt="country3"></img>
          <img className="country4Here" src={country4} alt="country4"></img>
         
        </Link>
      </div>
    );
  };
  
  export default Country;