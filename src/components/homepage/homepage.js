import React, {useState, useEffect} from "react";
import './homepage.css';
import Header from "./header";
import Main from "./main";  
import Footer from "./footer";


const Homepage = () => {

    
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
        <div className={`homepage ${darkMode ? 'dark-mode' : ''}`} 
        style={{
            backgroundColor: darkMode ? "rgb(27, 26, 26)" : "white",
            color: darkMode ? "aliceblue" : "rgb(27, 26, 26)"
        }}>

            <Header 
            logo="/img/homepage/crown.png"
            name="LangBoss"
            slogan="Discovering seas"  
            darkMode={darkMode}  
            toggleDarkMode={toggleDarkMode}     
            />
            <Main
            logo="/img/homepage/crown.png"
            name="LangBoss"
            slogan="Discovering seas"
            />
            <Footer
            languages="/img/homepage/languages.png"
            translator="/img/homepage/language.png"
            learning="/img/homepage/language-learning.png"
            />
        </div>
    );
}

export default Homepage;