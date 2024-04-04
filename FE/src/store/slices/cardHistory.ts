import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CardHistoryState} from '../../interfaces/states/CardHistoryState';

const initialState: CardHistoryState = {
  content: [],
  pageable: {
    pageNumber: 0,
    pageSize: 10,
    last: false,
    first: true,
  },
};

export const cardHistorySlice = createSlice({
  name: 'cardHistory',
  initialState,
  reducers: {
    pushContent: (state, action: PayloadAction<CardHistoryState>) => {
      if (action.payload.pageable.first) {
        state.content = action.payload.content;
      } else {
        state.content.push(...action.payload.content);
      }
      state.pageable = action.payload.pageable;
    },
  },
});

export const {pushContent} = cardHistorySlice.actions;

export default cardHistorySlice.reducer;
