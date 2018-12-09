import {
  actionChannel,
  call,
  take,
  put,
  race,
  fork,
  all,
  takeEvery
} from 'redux-saga/effects'
import {
  buffers
} from 'redux-saga'
import * as actions from '../actions/myTimerAction'
import {
  takeSnapshot,
  remoteAPIcall
} from '../service/aofc'

// wait :: Number -> Promise
function* wait() {
  yield fetch('http://www.mocky.io/v2/5c0aa9de3500005700a8623d?mocky-delay=2000ms').then(resp => {
    return resp.json()
  }).then(data => {
    console.log(data);
  })
}

function* runTimer() {
  const channel = yield actionChannel('START', buffers.dropping(2))

  while (yield take(channel)) {
    console.log("Taking")
    const {
      cancel,
      running
    } = yield race({
      running: call(wait),
      cancel: take('STOP')
    })

    if (cancel) {
      channel.flush(() => {
        console.log('flushed')
      })
    } else {
      // break
      yield put(actions.tick())
    }
  }
}

function* watchSnapShot() {
  const channel = yield actionChannel('SNAPSHOT_TAKEN', buffers.dropping(3));
  while (true) {
    const {
      payload,
      cancel
    } = yield race({
      cancel: take('STOP'),
      payload: take(channel),
    })
    if (cancel) {
      channel.flush(() => {
        console.log('flushed')
      })
    } else {
      const result = yield fork(remoteAPIcall, payload)
    }
  }
}

function* takeRollCall() {
  const imagePath = yield takeSnapshot().then(path => {
    return path
  });
  console.log(imagePath)
  yield put({
    type: 'SNAPSHOT_TAKEN',
    payload: imagePath
  });
}

function* watchRollCall() {
  while (true) {
    const {
      cancel,
      repeat
    } = yield race({
      cancel: take('STOP'),
      repeat: take('START_ROLL_CALL')
    });
    if (repeat) {
      console.log('taking snapshot')
      yield call(takeRollCall);
    }
  }
}

function* rootSaga() {
  yield all([
    fork(watchRollCall),
    fork(watchSnapShot)
  ])
}

export default rootSaga