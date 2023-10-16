import {all} from 'redux-saga/effects';
import watchFetchPosts from './PostsSaga';

function* rootSaga() {
  yield all([watchFetchPosts()]);
}

export default rootSaga;
