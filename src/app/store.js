import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subRedditReducer from '../features/Subreddits/subredditsSlice';
import postReducer from '../features/Posts/postsSlice';
import menuReducer from '../menuSlice';

export default configureStore({
  reducer: combineReducers({
    subreddits: subRedditReducer,
    posts: postReducer, 
    menu: menuReducer,
  }),
});
