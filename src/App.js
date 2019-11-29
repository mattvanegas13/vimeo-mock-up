import React from 'react';
import './App.css';
import ContentContainer from './Components/ContentContainer'


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  makeCall = () =>{

  }

  render(){
    this.makeCall()
    return(<div>hello</div>)
  }
}
