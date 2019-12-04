import React from 'react';
import styled from 'styled-components';
import CarouselSlide from '../Components/CarouselSlide';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselWrapper = styled.div`
    height:400px;
    width:100vw;
    position:relative;
    @media only screen and (max-width:992px){
        width:100vw;
        height:100vh;
        padding-top:20vh;
    }
`
const Navigation = styled.div`
    height:60px;
    width:60px;       
`
const Arrow = styled.div`
    height:35px;
    width:35px;
    margin-top:14px;
    position:absolute;
    z-index:4;
    cursor: pointer;
    border-width:2px;
    border-right:solid;
    border-top:solid;
    border-right-color:${props => props.wasLastChosen ? '#6bc1ff' : 'gray'};
    border-top-color:${props => props.wasLastChosen ? '#6bc1ff' : 'gray'};
    transform: rotate(${props => props.Right ? '45deg' : '225deg' });
    margin-left:${props => props.Right ? '5px' : '20px'};
`
const NavigationWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:60vw;
    height:40vh;
    padding-left:20vw;
    margin-top:20vh;
    position: absolute;
    top:0;
    @media only screen and (max-width:992px){
        width:98vw;
        padding-left:0vw;
        padding-top:20vh;
        
    }
`
const ArrowWrapper = styled.div`
    position:absolute;
    height:60px;
    width:60px;
    border:solid;
    border-color:black;
    border-width:2px;
    border-radius:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:4;
    visibility: ${props => props.isActive ? "visible": "hidden"};
`
const ButtonStyle = {
    border:'transparent',
    background:'transparent',
    backgroundColor:'transparent'
}

export default class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isMobile:window.innerWidth < 992 ? true : false,
            timeOutRef:0,
            setTimeout:0,
            isLeftActive:false,
            LeftLastChosen:false,
            isRightActive:false,
            RightLastChosen:false
        };
        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.flicker = this.flicker.bind(this);
    }

    componentWillUnmount(){
        clearTimeout(this.state.setTimeout);
    }

    flicker = (SideToFlicker) => {
        if(SideToFlicker === "Left"){
            this.setState({timeOutRef:setTimeout(() => {
                this.setState({isLeftActive:false});
              }, 200)});
        }else{
            this.setState({timeOutRef:setTimeout(() => {
                this.setState({isRightActive:false});
              }, 200)});
        }
    }
    

    handleArrowClick = (ArrowClicked) => {;
        if(ArrowClicked ==="Left"){
            this.setState({
                LeftLastChosen:true,
                isLeftActive:true,
                isRightActive:false,
                RightLastChosen:false
            });      
            this.flicker("Left");
        }else{
            this.setState({
                currSlide:0,
                RightLastChosen:true,
                isRightActive:true,
                LeftLastChosen:false,
                isLeftActive:false,
            });
            this.flicker("Right");
        }
    }

    render(){
        const {
            isMobile,
            isLeftActive,LeftLastChosen,
            isRightActive,RightLastChosen
        } = this.state;

        return(
            <CarouselWrapper>
                <CarouselProvider
                    style={{overflow:'visible'}}
                    dragEnabled
                    naturalSlideWidth={100}
                    naturalSlideHeight={isMobile ? 250 : 100}
                    totalSlides={this.props.content.length}
                >
                    <Slider>
                        {this.props.content.map((slide,i) => (
                            <Slide index={i}><CarouselSlide SlideContent={slide}/></Slide>
                        ))}
                    </Slider>  

                    <NavigationWrapper>
                        <Navigation>
                            <ButtonBack style={ButtonStyle}>
                                <ArrowWrapper isActive={isLeftActive}/>
                                <Arrow wasLastChosen={LeftLastChosen} onClick={() => this.handleArrowClick("Left")}/>
                            </ButtonBack>
                        </Navigation>

                        <Navigation>
                            <ButtonNext style={ButtonStyle}>
                                <ArrowWrapper isActive={isRightActive}/>
                                <Arrow Right wasLastChosen ={RightLastChosen} onClick={() => this.handleArrowClick("Right")}/>
                            </ButtonNext>
                        </Navigation> 

                    </NavigationWrapper>                 
                </CarouselProvider>

            </CarouselWrapper>
            
        );
    }
}
