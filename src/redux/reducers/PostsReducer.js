import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from '../constants';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  console.log('action type - posts reducer: ', action.type);
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {...state, posts: null, loading: true, error: null};
    case GET_POSTS_SUCCESS:
      return {...state, posts: action.payload, error: null, loading: false};
    case GET_POSTS_FAILURE:
      return {...state, posts: null, error: action.payload, loading: false};
    default:
      return state;
  }
};

export default postsReducer;
