import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CardHistoryState} from '../../interfaces/states/CardHistoryState';

const initialState: CardHistoryState = {
  content: [
    {
      account_history_id: 0,
      nation: 'KR',
      nation_kr: '한국',
      unit: 163,
      type: '충전',
      usage: 'Trip Together',
      quantity: 1000,
      balance: 1000,
      created_at: new Date('2024-03-23T12:10:00Z'),
    },
    {
      account_history_id: 1,
      nation: 'KR',
      nation_kr: '한국',
      unit: 163,
      type: '환불',
      usage: 'Trip Together',
      quantity: 50,
      balance: 950,
      created_at: new Date('2024-03-24T12:20:00Z'),
    },
    {
      account_history_id: 2,
      nation: 'UK',
      nation_kr: '영국',
      unit: 163,
      type: '출금',
      usage: 'Pork on Fire',
      quantity: 50,
      balance: 900,
      created_at: new Date('2024-03-25T12:30:00Z'),
    },
    {
      account_history_id: 3,
      nation: 'UK',
      nation_kr: '영국',
      unit: 163,
      type: '출금',
      usage: 'Fish and Chips',
      quantity: 20,
      balance: 880,
      created_at: new Date('2024-03-25T18:20:00Z'),
    },
    {
      account_history_id: 4,
      nation: 'UK',
      nation_kr: '영국',
      unit: 163,
      type: '출금',
      usage: 'Sherlock Holmes',
      quantity: 40,
      balance: 840,
      created_at: new Date('2024-03-26T11:20:00Z'),
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
