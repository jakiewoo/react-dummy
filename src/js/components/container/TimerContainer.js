import React, {Component} from "react";
import Timer from "../presentational/Timer";
import {connect} from "react-redux";
import * as actions from "../../actions/myTimerAction";
import {getFormattedTime, getStatus} from "../../reducers/timerReducer";

class TimerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Timer
        start={this.props.start}
        stop={this.props.stop}
        status={this.props.status}
        time={this.props.time}
      />
    )
  };
}

export default connect(
  state => ({
    time: getFormattedTime(state.timer),
    status: getStatus(state.timer)
  }),
  actions
)(TimerContainer)