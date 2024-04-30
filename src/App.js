import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './components/homepage/homepage';
import Translator from './components/translator/translator'; 
import "./App.css"
import NativeLanguage from './components/nativeLanguage/nativeLanguage';
import Profile from './components/profile/profile';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
        </header>
        <Routes> 
          <Route path="/" element={<NativeLanguage />} /> 
          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/translator" element={<Translator />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
