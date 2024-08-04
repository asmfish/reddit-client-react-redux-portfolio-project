import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isVisible: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
