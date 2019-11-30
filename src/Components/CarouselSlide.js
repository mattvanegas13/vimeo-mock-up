import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Components/HexagonPlay';

const SlideWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:50vw;
    height:40vh;
    padding-top:7vh;
    z-index:2;
`

const MasterWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`

const BackgroundImage = styled.div`
    display:flex;
    flex-direction:row;
    width:75vw;
    height:50vh;
    justify-content:space-around;
    align-items:center;
    position:absolute;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-image: url('${props => props.Img}');
    background-repeat: no-repeat;
    background-position: center;
    background-size:95%;
    z-index:-1;

`
const BackGroundOverlay = styled.div`
    position:absolute;
    background-color:${props => props.OverlayColor};
    opacity:.80;
    width:100vw;
    height:65vh;
    z-index:1;
`

const Overlay = styled.div`
    width:50vw;
    height:40vh;
    z-index:2;
    position: absolute;
    background-image: linear-gradient(190deg,transparent,transparent,transparent,rgba(${props => props.RGBA}));
`

const SlideImage = styled.div`
    display:flex;
    height:40vh;
    width:15vw;
    background-image: url('${props => props.Img}');
    background-repeat: no-repeat;
    background-position: center;
    background-size:80%;
`

const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:18vw;
    padding-top:2vh;
    margin-left:-1vw;
`

const BuyNowButton = styled.button`
  font-size: 1em;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-evenly;
  font-weight:bold;
  margin: 1em;
  padding: 0.25em 1em;
  color:white;
  background-color:${props => props.ButtonColor};
  border-color:${props => props.ButtonColor};
  border-radius: 3px;
  width:135px;
  height:45px;

`
const WatchTrailer = styled.button`
  font-size: 1em;
  font-weight:bold;
  color:white;
  margin: 1em;
  padding: 0.25em 1em;
  border-color:gray;
  background-color:transparent;
  border-radius: 3px;
  width:138px;
  height:45px;
`

const SlideTextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:40vh;
    width: 35vw;
    padding-top:3vh;
    color: white;
    @media only screen and (max-width:992px){
        height:20vh;
        width:75vw;
    }
`

const ArticleText = styled.div`
    margin-top:-1%;
`

const Slide = ({SlideContent}) => {
        return(
        <>
        <MasterWrapper>
        <BackgroundImage Img={SlideContent.Image}/>
        <BackGroundOverlay OverlayColor={SlideContent.OverlayColor}/>
        
        <SlideWrapper>
                <Overlay RGBA={SlideContent.rgba}/>
                <SlideImage Img={SlideContent.Image}/>
                <SlideTextWrapper>
                    <h2> {SlideContent.Title}</h2>
                    <ArticleText>{SlideContent.Summary}</ArticleText>
                    <ButtonWrapper>
                        <BuyNowButton ButtonColor={SlideContent.ButtonColor}> 
                        <Hexagon ButtonColor={SlideContent.ButtonColor}/> <div>Buy Now</div>
                    </BuyNowButton>
                        <WatchTrailer>Watch Trailer</WatchTrailer>
                    </ButtonWrapper>
                </SlideTextWrapper>
        </SlideWrapper>
        </MasterWrapper>
        </>
        );
}



export default Slide;
