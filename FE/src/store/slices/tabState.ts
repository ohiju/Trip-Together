import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
  isShown: true,
};

export const tabStateSlice = createSlice({
  name: 'tabState',
  initialState,
  reducers: {
    setDisplay: (state, action: PayloadAction<boolean>) => {
      state.isShown = action.payload;
    },
  },
});

export const {setDisplay} = tabStateSlice.actions;

export default tabStateSlice.reducer;
