import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  UserState,
  member,
  putData,
  user,
} from '../../interfaces/states/UserState';

const initialState: UserState = {
  token: '',
  user: {
    member_id: 0,
    username: 'default',
    nickname: 'default',
    image_url: '',
    description: 'default',
    is_pin: false,
  },
  member: {
    member_id: 0,
    image_url: '',
    nickname: 'default',
    description: 'default',
    gender: 'MALE',
    birth: '',
    created_at: '',
    username: 'default',
  },
  putData: {
    imgConfig: undefined,
    nickname: '',
    description: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
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
    setPutData: (state, action: PayloadAction<putData>) => {
      state.putData = {
        ...state.putData,
        ...action.payload,
      };
    },
    putUser: (state, action: PayloadAction<member>) => {
      state.member = action.payload;
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const {setLogin, setUser, setPin, setMember, setPutData, putUser} =
  userSlice.actions;

export default userSlice.reducer;
