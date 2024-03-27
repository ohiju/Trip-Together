import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CardHistoryState} from '../../interfaces/states/CardHistoryState';

const initialState: CardHistoryState = {
  content: [
    {
      account_history_id: 0,
      nation: 'UK',
      nation_kr: '영국',
      unit: 163,
      type: '출금',
      usage: 'Pork on Fire',
      quantity: 50,
      balance: 0,
      created_at: new Date('2024-03-25T12:30:00Z'),
    },
    {
      account_history_id: 1,
      nation: 'KR',
      nation_kr: '한국',
      unit: 163,
      type: '환불',
      usage: 'Trip Together',
      quantity: 50,
      balance: 50,
      created_at: new Date('2024-03-24T12:30:00Z'),
    },
    {
      account_history_id: 2,
      nation: 'KR',
      nation_kr: '한국',
      unit: 163,
      type: '충전',
      usage: 'Trip Together',
      quantity: 100,
      balance: 100,
      created_at: new Date('2024-03-23T12:30:00Z'),
    },
  ],
  pageable: {
    pageNumber: 0,
    pageSize: 10,
    last: false,
  },
};

export const cardHistorySlice = createSlice({
  name: 'cardHistory',
  initialState,
  reducers: {
    pushContent: (state, action: PayloadAction<CardHistoryState>) => {
      state.content.push(...action.payload.content);
      state.pageable = action.payload.pageable;
    },
  },
});

export const {pushContent} = cardHistorySlice.actions;

export default cardHistorySlice.reducer;
