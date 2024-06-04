import React, {useEffect, useState} from "react";
import './translator.css';
import Header from '../homepage/header'
import Dinamictranslator from "./dinamictranslator";
import Description from "./description";
import Review from "./review";
import { useLocation } from "react-router-dom"


export default function Translator() {


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nativeCountryName = searchParams.get("nativeCountryNameImport") || "";
  const nativeShortName = searchParams.get("nativeShortNameImport") || "";
  const nativeBackground = searchParams.get("nativeBackgroundImport") || "";
  const nativeTranslationBackground = searchParams.get("nativeBackgroundTranslationImport") || "";
  const countryName2 = searchParams.get("country") || "";
  const country1 = searchParams.get("country1") || "";
  const country2 = searchParams.get("country2") || "";
  const country3 = searchParams.get("country3") || "";
  const country4 = searchParams.get("country4") || "";
  const review = searchParams.get("review") || "";
  const months = searchParams.get("months") || "";
  const shortName = searchParams.get("shortName") || "";
  const description = searchParams.get("description") || "";
  const stars = searchParams.get("stars") || "";
  const reachness = searchParams.get("reachness") || "";
  const nativeDescription = searchParams.get("nativeDescriptionImport") || "";
  const nativeReview = searchParams.get("nativeReviewImport") || "";
  const nativeStars = searchParams.get("nativeStarsImport") || "";
  const nativeMonths = searchParams.get("nativeMonthsImport") || "";
  const nativeReachness = searchParams.get("nativeReachnessImport") || "";
  const nativeCountry1 = searchParams.get("nativeCountry1Import") || "";
  const nativeCountry2 = searchParams.get("nativeCountry2Import") || "";
  const nativeCountry3 = searchParams.get("nativeCountry3Import") || "";
  const nativeCountry4 = searchParams.get("nativeCountry4Import") || "";

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

      const [isReversed, setIsReversed] = useState(false);

      const handleReverse = () => {
        setIsReversed(!isReversed);
    };


    return (
        <div className="translator" style={{
            backgroundColor: darkMode ? "rgb(27, 26, 26)" : "white",
            color: darkMode ? "aliceblue" : "rgb(27, 26, 26)"}}>
            <Header
                logo="/img/homepage/crown.png"
                name="LangBoss"
                slogan="Discovering seas"
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <div>
            <Dinamictranslator
            name2={countryName2}
            name1={nativeCountryName}
            short_name2={shortName}
            short_name1={nativeShortName}
            nativeBackground={nativeBackground}
            nativeTranslationBackground={nativeTranslationBackground}
            handleReverse={handleReverse}
            isReversed={isReversed}
            />
            </div>
            <div>
            <Description
            data1="/img/translator/data.png"
            name={countryName2}
            description={description}
            nativeDescription={nativeDescription}
            nativeName={nativeCountryName}
            isReversed={isReversed}
            />
            </div>
            <div>
            <Review
            reachness={reachness}
            stars={stars}
            challenge="/img/translator/goal.png"
            monthsImage="/img/translator/month.png"
            months={months}
            planet="/img/translator/advertising.png"
            country1={country1}
            country2={country2}
            country3={country3}
            country4={country4}
            reviewImage="/img/translator/badge.png"
            review={review}
            isReversed={isReversed}
            nativeCountry1={nativeCountry1}
            nativeCountry2={nativeCountry2}
            nativeCountry3={nativeCountry3}
            nativeCountry4={nativeCountry4}
            nativeReachness={nativeReachness}
            nativeMonths={nativeMonths}
            nativeStars={nativeStars}
            nativeReview={nativeReview}
            />
            </div>
        </div>
    )
}
