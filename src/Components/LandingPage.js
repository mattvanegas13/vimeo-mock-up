import React from 'react';
import ContentContainer from '../Components/ContentContainer'
import styled from 'styled-components';

const LandingPageWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:100vw;
    height:40vh;
    align-content:center;
    align-items:center;
`

const LandingPage = ({LandingPageText}) => {
        return(
            <LandingPageWrapper>
                    <ContentContainer 
                        Location="Left" 
                        ImgSrc="https://i.vimeocdn.com/video/595198868_505x160.jpg" 
                        Title="Beams"
                        Color="black"
                        Text={LandingPageText}
                    />
            </LandingPageWrapper>
        );
}

export default LandingPage;
