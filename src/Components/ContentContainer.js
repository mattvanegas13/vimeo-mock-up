import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:${props => props.Location === "Left" ? 'row':'row-reverse'};
    height:300px;
    padding-top:2vh;
    width:1000px;
    @media only screen and (max-width:992px){
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 100vw;
        height:450px;
    }
`
const PositionWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100vw;
    height:auto;
`
const ImageContainer = styled.div`
    width:525px;
    height:300px;
    background-image: url('${props => props.Img}');
    background-repeat: no-repeat;
    background-position: center; 
    background-size:490px;
    @media only screen and (max-width:992px){
        width:90%;
        height:80vh;
        background-size:50%;
        margin-bottom: ${props => props.isLanding ? '50px': '0px'};
    }
`
const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    height:250px;
    width: 500px;
    padding-top:6%;  
    padding-left:12px;
    color: ${props => props.TextColor};
    @media only screen and (max-width:992px){
        height:50vh;
        width:75vw;
        padding-top:10%;
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