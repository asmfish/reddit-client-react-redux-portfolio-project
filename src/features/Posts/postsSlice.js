import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPostsAPI, getPostCommentsAPI } from '../../api/reddit-api';


export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    comments: [],
    selectedSubreddit: '/r/pics/',
    searchTerm: '',
    postsLoading: false,
    postsLoadingError: false,
    postCommentsLoading: false,
    postCommentsLoadingError: false
  },
  reducers: {
    setSearchTerm(state, action) {
        state.searchTerm = action.payload;
    },
    setSelectedSubreddit(state, action) {
        state.selectedSubreddit = action.payload;
        state.searchTerm = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubredditPostsAPI.pending, (state) => {
        state.postsLoading = true;
        state.postsLoadingError = false;
      })
      .addCase(getSubredditPostsAPI.fulfilled, (state, action) => {
        state.postsLoading = false;
        state.posts = action.payload;
        state.comments = [];
      })
      .addCase(getSubredditPostsAPI.rejected, (state) => {
        state.postsLoading = false;
        state.postsLoadingError = true;
        state.posts = [];
        state.comments = [];
      })
      .addCase(getPostCommentsAPI.pending, (state) => {
        state.comments = [];
        state.postCommentsLoading = true;
        state.postCommentsLoadingError = false;
      })
      .addCase(getPostCommentsAPI.fulfilled, (state, action) => {
        state.postCommentsLoading = false;
        state.comments = action.payload;
      })
      .addCase(getPostCommentsAPI.rejected, (state) => {
        state.postCommentsLoading = false;
        state.postCommentsLoadingError = true;
        state.comments = [];
      })
  },
});

//filter posts by searchTerm
export const selectFilteredPosts = (searchTerm) => (state) => {
    if(searchTerm && searchTerm !== ''){
        return state.posts.posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
        ); 
    } 
}

export const selectPosts = (state) => state.posts.posts;
export const selectPostComments = (state) => state.posts.comments;
export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;
export const selectSearchTerm = (state) => state.posts.searchTerm;

export const postsLoading = (state) => state.posts.postsLoading;
export const postCommentsLoading = (state) => state.posts.postCommentsLoading;

export const {
    setSearchTerm,
    setSelectedSubreddit
  } = postsSlice.actions;

export default postsSlice.reducer;

