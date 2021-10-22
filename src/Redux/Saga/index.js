import { all } from 'redux-saga/effects'
import userSaga from './Usersaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
  ])
}