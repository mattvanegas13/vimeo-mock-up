import React from 'react';
import styled from 'styled-components';

const SlideWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:60vw;
    height:40vh;
`
const SlideImage = styled.div`
    display:flex;
    height:40vh;
    width:20vw;
    background-image: url('${props => props.Img}');
    background-repeat: no-repeat;
    background-position: center;
`

const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:40vw;
`

const BuyNowButton = styled.button`

`
const WatchTrailer = styled.button`

`

const SlideTextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    height:40vh;
    width: 40vw;
    padding-top:6%;  
    padding-left:12px;
    color: ${props => props.TextColor};
    @media only screen and (max-width:992px){
        height:20vh;
        width:75vw;
    }
`

const ArticleText = styled.div`
    margin-top:-3%;
`

const Slide = ({SlideContent}) => {
        return(
            <SlideWrapper>
                <SlideImage Img={SlideContent.Image}/>
                <SlideTextWrapper>
                    <h2> {SlideContent.Title}</h2>
                    <ArticleText>{SlideContent.Summary}</ArticleText>
                    <ButtonWrapper>
                        <BuyNowButton/>
                        <WatchTrailer/>
                    </ButtonWrapper>
                </SlideTextWrapper>
            </SlideWrapper>
        );
}



export default Slide;
