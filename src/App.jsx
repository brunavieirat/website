import React, { useEffect, useState } from 'react';
import SmoothScroll from 'smooth-scroll';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import JsonData from './data/data.json';
import Home from './components/home';
import PrivacyPolicy from './components/privacyPolicy';
import TermsOfService from './components/termsOfService';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home data={landingPageData} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  );
};

export default App;
