import { createSlice } from '@reduxjs/toolkit';

const AppReducer = createSlice({
  name: 'App',
  initialState: {},
  reducers: {
    getUser: () => {},
    increment: (state, action) => {
      state.count += 1;
    },
  },
});

export const { getUser, increment } = AppReducer.actions;
export default AppReducer.reducer;
