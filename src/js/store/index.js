import {createStore} from 'redux'
import counter from "../reducers/counterReducer"

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

export default store;