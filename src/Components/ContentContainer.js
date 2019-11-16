import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:${props => props.Location === "Left" ? 'row':'row-reverse'};
    align-items:center;
    height:40vh;
    width:65vw;
`

const ImageContainer = styled.div`
    display:flex;
    height:60vh;
    width:34vw;
    background-image: url('${props => props.Img}');
    background-repeat: no-repeat;
    background-position: center; 
    background-size:80%;
`

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:40vh;
    width: 27vw;
    margin-top:5%;
    color:${props => props.Color};    
`
const ArticleText = styled.div`
`

const ContentContainer = ({Location, ImgSrc, Title, Text,Color}) => {
    console.log(Location)
        return(
            <ContentWrapper Location={Location}>
                <ImageContainer Img={ImgSrc} />
                <TextContainer Location={Location} TextColor={Color}>
                    <h2> {Title}</h2>
                    <ArticleText>{Text}</ArticleText>
                </TextContainer>
            </ContentWrapper>
        );
}

export default ContentContainer;
