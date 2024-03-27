import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserState, member, user} from '../../interfaces/states/UserState';

const initialState: UserState = {
  isLogin: true,
  user: {
    member_id: -1,
    username: 'Username',
    nickname: '',
    image_url: '',
    description: '',
    is_pin: true,
  },
  member: {
    member_id: -1,
    image_url: '',
    nickname: '',
    description: '',
    gender: '',
    birth: '',
    created_at: '',
    username: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUser: (state, action: PayloadAction<user>) => {
      state.user = action.payload;
    },
    setPin: (state, action: PayloadAction<boolean>) => {
      state.user.is_pin = action.payload;
    },
    setMember: (state, action: PayloadAction<member>) => {
      state.member = action.payload;
    },
  },
});

export const {setLogin, setUser, setPin, setMember} = userSlice.actions;

export default userSlice.reducer;
