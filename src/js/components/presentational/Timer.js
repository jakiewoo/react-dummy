import PropTypes from "prop-types";
import React from "react";

export const Timer = ({start, stop, reset,  status, time}) => (
  <div>
    <p>
      {time} ({status})
    </p>
    <button
      disabled={status === 'Running'}
      onClick={() => reset()}>
      Reset
    </button>
    <button
      disabled={status === 'Running'}
      onClick={() => start()}>
      Start
    </button>
    <button
      disabled={status === 'Stopped'}
      onClick={stop}>
      Stop
    </button>
  </div>
)

Timer.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Timer