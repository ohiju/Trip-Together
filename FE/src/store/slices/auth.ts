import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AuthState, token} from '../../interfaces/states/tokenState';

const initialState: AuthState = {
  refresh_token: 'ddddddeeeeeeffffff',
  token: {
    access_token: 'aaaaaabbbbbbcccccc',
    expires_in: 1800,
    created_at: Date.now() / 1000,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRefresh: (state, action: PayloadAction<string>) => {
      state.refresh_token = action.payload;
    },
    setToken: (state, action: PayloadAction<token>) => {
      state.token = action.payload;
    },
  },
});

export const {setToken, setRefresh} = authSlice.actions;

export default authSlice.reducer;
