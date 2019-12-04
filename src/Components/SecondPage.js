import React from 'react';
import ContentContainer from '../Components/ContentContainer'
import styled from 'styled-components';

const SecondPageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:115vh;
    align-content:center;
    background-image: linear-gradient( rgba(0,0,0,1), rgba(0,0,0,0));
    @media only screen and (max-width:992px){
        height:135vh;
    }
`
const SecondPage = ({SecondPageContent}) => {
        return(
            <SecondPageWrapper>
                <ContentContainer 
                Location={SecondPageContent.Locations[1]}
                ImgSrc={SecondPageContent.Images[1]}
                Title={SecondPageContent.Titles[1]}
                Color={SecondPageContent.Color[1]}
                Text={SecondPageContent.PlaceHolderText}
                />
                <ContentContainer 
                Location={SecondPageContent.Locations[2]}
                ImgSrc={SecondPageContent.Images[2]}
                Title={SecondPageContent.Titles[2]}
                Color={SecondPageContent.Color[2]}
                Text={SecondPageContent.PlaceHolderText}
                />
            </SecondPageWrapper>
        );
}

export default SecondPage;