import React from "react";
import './review.css';
import Footer from "../homepage/footer"

const Review = ({stars, challenge, months, monthsImage, planet, country1, country2, country3, country4, reviewImage, review, reachness, isReversed, nativeMonths, nativeStars, nativeReachness, nativeCountry1, nativeCountry2, nativeCountry3, nativeCountry4, nativeReview}) => {

    return (
        <div className="Review">
            <div className="languageInformations">
                <div className="challenge">
                    <img className="challengeImage" src={challenge} alt="challengeImage"></img>
                    <p className="stars">{isReversed? nativeStars : stars}</p>
                    <div className="monthsDuration">
                        <p className="tempDuration">{isReversed? nativeMonths : months}</p>
                        <img className="monthsImage" src={monthsImage} alt="months"></img>
                    </div>
                </div>
                <div className="experience">
                    <img className="reviewImage" src={reviewImage} alt="reviewImage"></img>
                    <p className="reviewText">{isReversed ? nativeReview : review}</p>
                </div>
                <div className="reachness">
                    <div className="planetOrbit">
                        <img className="planet" src={planet} alt="planet"></img>
                        <h3 className="toplang">{isReversed ? nativeReachness : reachness}</h3>
                    </div>
                    <div className="countries3">
                        <img className="countrySpeaker1" src={isReversed ? nativeCountry1 : country1} alt="country1"></img>
                        <img className="countrySpeaker2" src={isReversed ? nativeCountry2 : country2} alt="country2"></img>
                        <img className="countrySpeaker3" src={isReversed ? nativeCountry3 : country3} alt="country3"></img>
                        <img className="countrySpeaker4" src={isReversed ? nativeCountry4 : country4} alt="country4"></img>
                    </div>
                </div>
            </div>
            <Footer
            languages="/img/homepage/languages.png"
            translator="/img/homepage/language.png"
            learning="/img/homepage/language-learning.png"
            />
        </div>
    )
}

export default Review;