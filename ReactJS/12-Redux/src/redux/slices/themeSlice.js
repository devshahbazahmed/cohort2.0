import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    changeToLightTheme: (state) => {
      state.value = 'light';
    },
    changeToDarkTheme: (state) => {
      state.value = 'dark';
    },
    changeToBrownTheme: (state) => {
      state.value = 'brown';
    },
  },
});

export const { changeToLightTheme, changeToDarkTheme, changeToBrownTheme } =
  themeSlice.actions;

export default themeSlice.reducer;
