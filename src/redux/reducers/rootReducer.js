import {combineReducers} from 'redux';
import postsReducer from './PostsReducer';

const rootReducers = combineReducers({
  postsReducer: postsReducer,
});

export default rootReducers;
