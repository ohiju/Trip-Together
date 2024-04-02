import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  ChatState,
  flashmob,
  flashmobInfo,
  message,
  receiptDetail,
  settlementDetail,
  settlements,
} from '../../interfaces/states/ChatState';

const initialState: ChatState = {
  flashmobs: [],
  messages: [],
  flashmob: {
    members: [],
  },
  settlements: {
    requester_settlements: [],
    participant_settlements: [],
  },
  receipt: {
    price: 0,
    has_sent: false,
    receipts: [],
  },
  settlement: {
    attendees: [],
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setFlashMobs: (state, action: PayloadAction<flashmob[]>) => {
      state.flashmobs = action.payload;
    },
    setMessages: (state, action: PayloadAction<message[]>) => {
      state.messages = action.payload;
    },
    pushMessage: (state, action: PayloadAction<message>) => {
      state.messages.push(action.payload);
    },
    setFlashMob: (state, action: PayloadAction<flashmobInfo>) => {
      state.flashmob = action.payload;
    },
    setSettlements: (state, action: PayloadAction<settlements>) => {
      state.settlements = action.payload;
    },
    setReceipt: (state, action: PayloadAction<receiptDetail>) => {
      state.receipt = action.payload;
    },
    setSettlement: (state, action: PayloadAction<settlementDetail>) => {
      state.settlement = action.payload;
    },
  },
});

export const {
  setFlashMobs,
  setMessages,
  pushMessage,
  setFlashMob,
  setSettlements,
  setReceipt,
  setSettlement,
} = chatSlice.actions;
export default chatSlice.reducer;
