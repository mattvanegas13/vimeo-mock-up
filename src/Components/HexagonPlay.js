import React from 'react'
import styled from 'styled-components'

const HexagonWrapper = styled.div`
`

const HexagonTop = styled.div`
    width: 0;
    border-bottom: 7px solid white;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
`
const HexagonBody = styled.div`
    width: 22px;
    height: 10px;
    background-color: white;
`
const HexagonBottom = styled.div`
    width: 0;
    border-top: 7px solid white;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
`

const PlayButton = styled.div`
    position:relative;
    z-index:2;
    margin-left:7px;
    width: 0; 
    height: 0; 
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid ${props => props.Color};
`

const Hexagon = ({ButtonColor}) =>{
    console.log(ButtonColor)
    return(
        <HexagonWrapper>
            <HexagonTop/>
            <HexagonBody >
            <PlayButton Color={ButtonColor}/>
            </HexagonBody>
            <HexagonBottom/>
        </HexagonWrapper>
    );
}

export default Hexagon;