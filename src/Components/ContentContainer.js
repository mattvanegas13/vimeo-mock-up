import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:${props => props.Location === "Left" ? 'row':'row-reverse'};
    height:300px;
    padding-top:2%;
    width:1000px;
    @media only screen and (max-width:992px){
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 100vw;
        height:600px;
    }
`
const PositionWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100vw;
    height:auto;
    @media only screen and (max-width:992px){
        height:70vh;
    }
`

const ImageContainer = styled.div`
    width:525px;
    height:300px;
    background-image: url('${props => props.Img}');
    background-repeat: no-repeat;
    background-position: center; 
    background-size:490px;
    @media only screen and (max-width:992px){
        width:60vw;
        height:48vh;
    }
`

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    height:250px;
    width: 500px;
    padding-top:5%;  
    padding-left:12px;
    color:${props => props.Color};
    @media only screen and (max-width:992px){
        height:20vh;
        width:600px;
    }
`
const ArticleText = styled.div`
    margin-top:-3%;
`

const ContentContainer = ({Location, ImgSrc, Title, Text, Color,Landing}) => {
        return(
            <PositionWrapper>
                <ContentWrapper Location={Location}>
                    <TextContainer Location={Location} TextColor={Color}>
                        <h2> {Title}</h2>
                        <ArticleText>{Text}</ArticleText>
                    </TextContainer>
                    <ImageContainer isLanding={Landing} Img={ImgSrc} />
                </ContentWrapper>
            </PositionWrapper>
        );
}

export default ContentContainer;
