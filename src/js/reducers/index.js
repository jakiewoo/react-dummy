import {combineReducers} from 'redux'
import counter from "./counterReducer"
import timer from "./timerReducer"

const reducers = combineReducers({
  timer, counter
});

export default reducers;
