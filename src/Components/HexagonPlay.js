import React from 'react'
import styled from 'styled-components'

const HexagonWrapper = styled.div`
`

const HexagonTop = styled.div`
    width: 0;
    border-bottom: 7px solid ${props => props.Color};
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
`
const HexagonBody = styled.div`
    width: 22px;
    height: 10px;
    background-color: ${props => props.Color};
`
const HexagonBottom = styled.div`
    width: 0;
    border-top: 7px solid ${props => props.Color};
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
`

const PlayButton = styled.div`
    position:relative;
    z-index:2;
    margin-left:8px;
    width: 0; 
    height: 0; 
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid white ;
`

const Hexagon = ({ButtonColor}) =>{
    console.log(ButtonColor)
    return(
        <HexagonWrapper>
            <HexagonTop Color={ButtonColor}/>
            <HexagonBody Color={ButtonColor}>
            <PlayButton/>
            </HexagonBody>
            <HexagonBottom Color={ButtonColor}/>
        </HexagonWrapper>
    );
}

export default Hexagon;