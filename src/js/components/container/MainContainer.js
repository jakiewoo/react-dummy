import FormContainer from "./FormContainer";
import TimerContainer from "./TimerContainer";
import {Component} from "react";
import React from "react";

class MainContainer extends Component {
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