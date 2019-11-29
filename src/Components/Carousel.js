import React from 'react';
import styled from 'styled-components';

export default class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currSlide:0,
        };
    }
}