import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subRedditReducer from '../features/Subreddits/subredditsSlice';
import postReducer from '../features/Posts/postsSlice';

export default configureStore({
  reducer: combineReducers({
    subreddits: subRedditReducer,
    posts: postReducer
  }),
});
