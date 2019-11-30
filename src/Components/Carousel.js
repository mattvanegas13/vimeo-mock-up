import React from 'react';
import styled from 'styled-components';
import CarouselSlide from '../Components/CarouselSlide';

const CarouselWrapper = styled.div`
    display:flex;
    height:65vh;
    width:100vw;
`


export default class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currSlide:0,
        };
    }

    render(){
        return(
            <CarouselWrapper>
                ye
            </CarouselWrapper>
            
        );
    }
}