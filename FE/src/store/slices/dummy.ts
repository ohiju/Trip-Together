import {createSlice} from '@reduxjs/toolkit';
import {DummyState} from '../../interfaces/states/DummyState';

const initialState: DummyState = {};

export const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default dummySlice.reducer;
