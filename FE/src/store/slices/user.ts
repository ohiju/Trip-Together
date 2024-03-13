import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../interfaces/states/UserState';

const initialState: UserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {login} = userSlice.actions;

export default userSlice.reducer;
