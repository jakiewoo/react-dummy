import React, {Component} from "react";
import Timer from "../presentational/Timer";
import {connect} from "react-redux";
import * as actions from "../../actions/myTimerAction";
import {getFormattedTime, getStatus} from "../../reducers/timerReducer";

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.intervalHandler = null;
  }

   start() {
     this.props.dispatch(actions.start());
     this.intervalHandler = setInterval(() => {
      this.props.dispatch({
        type: 'START_ROLL_CALL'
      })
     }, 1000)
  }

  stop() {
    clearInterval(this.intervalHandler);
    this.props.dispatch(actions.stop());
  }

  render() {
    console.log(this.props);
    return (
      <Timer
        start={this.start}
        stop={this.stop}
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
  })
)(TimerContainer)