import {createSlice} from '@reduxjs/toolkit';

// store -> root reducer(root, state) -> user slice, order slice
// state.user.email
// state.order

// action: state를 바꾸는 행위
// dispatch: 그 액션을 실제로 실행하는 함수
// reducer: 액션이 실제로 실행되면 state를 바꾸는 로직
// slice: store의 상태 중 특정한 의미를 기준으로 분리되어 있는 부분들

const initialState = {
  // 향후 추가
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default userSlice;
