import {put, takeLatest, call} from 'redux-saga/effects';
import {fetchPostsFailure, fetchPostsSuccess} from '../actions/PostsAction';
import {GET_POSTS_REQUEST} from '../constants';
import axios from 'axios';

function* fetchPosts() {
  try {
    const response = yield call(() =>
      axios.get('http://10.24.25.41:3000/api/posts/'),
    );
    console.log('fetch posts - posts saga: ', response.data.data);
    yield put(fetchPostsSuccess(response.data.data));
  } catch (error) {
    console.error('fetch posts - posts saga - error: ', error.message);
    yield put(fetchPostsFailure(error));
  }
}

export default function* watchFetchPosts() {
  yield takeLatest(GET_POSTS_REQUEST, fetchPosts);
}
