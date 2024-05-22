import { createSlice } from '@reduxjs/toolkit';
import { getSubredditsAPI } from '../../api/reddit-api';


export const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    subreddits: [],
    isLoading: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubredditsAPI.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getSubredditsAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subreddits = action.payload;
      })
      .addCase(getSubredditsAPI.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.subreddits = [];
      })
  },
});

export const selectSubreddits = (state) => state.subreddits.subreddits;

export const isLoading = (state) => state.subreddits.isLoading;

export default subredditsSlice.reducer;
