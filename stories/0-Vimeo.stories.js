import React from 'react';
import App from '../src/App';
import ContentContainer from '../src/Components/ContentContainer';

export default {
  title: 'Vimeo Mock Up',
};

const PlaceHolderText = "Lorem ipsum dolor sit amet, consectetur adipscing elit. Donec tinicidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.";
export const MockUp = () => <App/>;

export const ContentComponent = ()  => (
  <>
    <ContentContainer 
      Location="Right" 
      ImgSrc="https://i.vimeocdn.com/video/589972810_530x315.jpg" 
      Title="Beams"
      Color="#ffffff"
      Text={PlaceHolderText}
    />
    <ContentContainer 
      Location="Left" 
      ImgSrc="https://i.vimeocdn.com/video/590587169_530x315.jpg" 
      Title="Move 2"
      Color="#ffffff"
      Text={PlaceHolderText}
    />
  </>
  );


MockUp.story = {
  name: 'Vimeo Mock Up : Main',
};
ContentComponent.story ={
  name: 'Content Container'
}
