import React from 'react';
import styled from 'styled-components';
import Content from '../Content/content.json';
import Slide from '../Components/CarouselSlide';

const CarouselWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`
const Navigation = styled.div`
    height:60px;
    width:60px;
`

const Arrow = styled.div`
    height:35px;
    width:35px;
    margin-top:14px;
    transform: rotate(${props => props.Right ? '45deg' : '225deg' });
    border-right:solid;
    border-right-color:${props => props.wasLastChosen ? 'lightblue' : 'red'};
    border-top:solid;
    border-top-color:${props => props.wasLastChosen ? 'lightblue' : 'red'};
    border-width:2px;
    position:absolute;
    z-index:4;
    cursor: pointer;
    margin-left:${props => props.Right ? '5px' : '20px'};
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


export default class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currSlide:0,
            timeOutRef:0,
            isLeftActive:false,
            LeftLastChosen:false,
            setTimeout:0,
            isRightActive:false,
            RightLastChosen:false
        };
        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.flicker = this.flicker.bind(this);
    }

    componentWillUnmount(){
        clearTimeout(this.state.setTimeout);
    }

    flicker = (SideToFlicker) =>{
        if(SideToFlicker === "Left"){
            this.setState({timeOutRef:setTimeout(() => {
                this.setState({isLeftActive:false});
              }, 175)});
        }else{
            this.setState({timeOutRef:setTimeout(() => {
                this.setState({isRightActive:false});
              }, 175)});
        }
    }
    

    handleArrowClick = (ArrowClicked) => {
        const{ currSlide } = this.state;
        if(ArrowClicked ==="Left"){
            if(currSlide === 0){
                this.setState({
                    currSlide:4,
                    LeftLastChosen:true,
                    isLeftActive:true,
                    isRightActive:false,
                    RightLastChosen:false
                });
                
            }else{
                this.setState({
                    currSlide:currSlide-1,
                    LeftLastChosen:true,
                    isLeftActive:true,
                    isRightActive:false,
                    RightLastChosen:false
                });
            }
            this.flicker("Left");
        }else{
            if(currSlide === 4){
                this.setState({
                    currSlide:0,
                    RightLastChosen:true,
                    isRightActive:true,
                    LeftLastChosen:false,
                    isLeftActive:false,
                });
            }else{
                this.setState({
                    currSlide:currSlide+1,
                    RightLastChosen:true,
                    isRightActive:true,
                    LeftLastChosen:false,
                    isLeftActive:false,
                });
            }
            this.flicker("Right");
        }
    }


    render(){
        const {
            currSlide,
            isLeftActive,LeftLastChosen,
            isRightActive,RightLastChosen
        } = this.state

        return(
            <CarouselWrapper>
                <Navigation>
                    <ArrowWrapper isActive={isLeftActive}/>
                    <Arrow wasLastChosen={LeftLastChosen} onClick={() => this.handleArrowClick("Left")}/>
                </Navigation>
                
                <Slide SlideContent={Content.Slides[currSlide]}/>
                
                <Navigation>
                    <ArrowWrapper isActive={isRightActive}/>
                    <Arrow Right wasLastChosen ={RightLastChosen} onClick={() =>this.handleArrowClick("Right")}/>
                </Navigation>
            </CarouselWrapper>
            
        );
    }
}