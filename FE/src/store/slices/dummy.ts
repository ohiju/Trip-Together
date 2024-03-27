import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {},
});

// export const {} = dummySlice.actions;

export default dummySlice.reducer;
