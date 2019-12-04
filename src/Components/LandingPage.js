import React from 'react';
import ContentContainer from '../Components/ContentContainer'
import styled from 'styled-components';

const LandingPageWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:100vw;
    height:60vh;
    align-content:center;
    align-items:center;
`

const LandingPage = ({LandingPageContent}) => {
        return(
            <LandingPageWrapper>
                    <ContentContainer 
                        Location={LandingPageContent.Locations[0]}
                        ImgSrc={LandingPageContent.Images[0]}
                        Title={LandingPageContent.Titles[0]}
                        Color={LandingPageContent.Color[0]}
                        Text={LandingPageContent.PlaceHolderText}
                    />
            </LandingPageWrapper>
        );
}

export default LandingPage;
