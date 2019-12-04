import React from 'react';
import LandingPage from '../src/Components/LandingPage';
import SecondPage from '../src/Components/SecondPage';
import Carousel from '../src/Components/Carousel';
import Content from '../src/Content/content';
import './App.css';

const App = () => {
  return(
  <>
    <LandingPage LandingPageContent={Content}/>
    <SecondPage SecondPageContent={Content}/>
    <Carousel content={Content.Slides}/>
  </>
  );
}

export default App;