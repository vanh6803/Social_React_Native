import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from '../constants';

export const fetchPostsRequest = () => {
  console.log('action - fetch posts request');
  return {
    type: GET_POSTS_REQUEST,
  };
};
export const fetchPostsSuccess = posts => {
  console.log('action - fetch posts success: ', posts);
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};
export const fetchPostsFailure = error => {
  console.log('action - fetch posts failure: ', error.message);
  return {
    type: GET_POSTS_FAILURE,
    payload: error,
  };
};
