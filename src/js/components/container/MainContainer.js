import FormContainer from "./FormContainer";
import TimerContainer from "./TimerContainer";
import {Component} from "react";
import React from "react";

class MainContainer extends Component {
  componentDidMount() {
    console.log(process.env.API_URL);
    console.log('lala');
  }
  render() {
    return (
      <div id="main">
        <FormContainer/>
        <TimerContainer/>
      </div>
    )
  };
}

export default MainContainer