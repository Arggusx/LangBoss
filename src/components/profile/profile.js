import React from "react";
import './profile.css'
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <div className="profileHere">
            <div className="squares">
                <div className="square1"><img className="throne" src="/img/loginIcons/throne.png" alt="throne"></img></div>
                <div className="square2"></div>
                <div className="square3"></div>
                <div className="square4"></div>
                <div className="square5"
                
                style={{
                    
                    backgroundImage: `url("/img/loginIcons/desertIllustration.jpg")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                
                }}>
                
                </div>
                <div className="square6"
                
                style={{
                    
                    backgroundImage: `url("/img/loginIcons/desertIllustration.jpg")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                
                }}>

                </div>
                <div className="square7"
                
                style={{
                    
                    backgroundImage: `url("/img/loginIcons/desertIllustration.jpg")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                
                }}>


                </div>
                <div className="square8"></div>
            </div>
            <div className="profileCreation">

                <div>
                <h1 className="helloProfile">Hello, 

                <h1 className="whoisProfile"> Who is</h1>

                <ul className="learningUl">
                    <li>L</li>
                    <li>e</li>
                    <li>a</li>
                    <li>r</li>
                    <li>n</li>
                    <li>i</li>
                    <li>n</li>
                    <li>g</li>
                    <li>?</li>
                </ul>


                </h1>
                </div>
                <div className="profileCreationAvatar">
                    <div className="profileAvatar">
                        <div className="profileAvatarIcon"></div>
                        <textarea className="profileName" maxLength={12} placeholder="Choose your name" required></textarea>
                    </div>
                    <div className="buttonDisplay">
                    <div className="profileButtonCreation"></div>
                    <h3 className="createText">Create your Boss</h3>
                    </div>
                </div>
            </div>
          
            <div className="startingJourneySection">
            <Link to="/nativeLanguage">
            <div className="startingJourney">
                <h3 className="startJourneyText">Start your journey</h3>
            </div>
            </Link>
            </div>
            
        </div>
    )
}