import React from 'react';
import App from '../src/App';
import ContentContainer from '../src/Components/ContentContainer';
import LandingPage from '../src/Components/LandingPage'
import Content from '../src/Content/content'

export default {
  title: 'Vimeo Mock Up',
};



export const MockUp = () => <App/>;

export const ContentComponent = ()  => (
  <>
    <ContentContainer 
      Location={Content.Locations[1]}
      ImgSrc={Content.Images[1]}
      Title={Content.Titles[1]}
      Color="black"
      Text={Content.PlaceHolderText}
    />
    <ContentContainer 
      Location={Content.Locations[2]}
      ImgSrc={Content.Images[2]}
      Title={Content.Titles[2]}
      Color="black"
      Text={Content.PlaceHolderText}
    />
  </>
  );
export const Landing = () => <LandingPage LandingPageText={Content.PlaceHolderText}/>


MockUp.story = {
  name: 'Vimeo Mock Up : Main',
};
ContentComponent.story ={
  name: 'Content Container'
}
Landing.story ={
  name: 'Landing Page'
}
