import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  ChatState,
  flashmob,
  flashmobInfo,
  receiptDetail,
  settlementDetail,
  settlements,
} from '../../interfaces/states/ChatState';

const initialState: ChatState = {
  flashmobs: [],
  messages: [
    {
      flashmob_id: 0,
      sender_id: 3,
      sender_nickname: 'KTaeGyu',
      sender_image_url: 'profileImg/sample.jpg',
      content: '',
      created_at: new Date('2024-03-30T18:00:00'),
      status: 'JOIN',
    },
    {
      flashmob_id: 0,
      sender_id: 1,
      sender_nickname: 'OhHeeJuice',
      sender_image_url: '',
      content: '',
      created_at: new Date('2024-03-30T19:00:00'),
      status: 'ATTEND',
    },
    {
      flashmob_id: 0,
      sender_id: 1,
      sender_nickname: 'OhHeeJuice',
      sender_image_url: '',
      content: '',
      created_at: new Date('2024-03-30T19:00:00'),
      status: 'JOIN',
    },
    {
      flashmob_id: 0,
      sender_id: 3,
      sender_nickname: 'KTaeGyu',
      sender_image_url: 'profileImg/sample.jpg',
      content: '어서오세요!',
      created_at: new Date('2024-03-30T19:05:00'),
      status: 'MESSAGE',
    },
    {
      flashmob_id: 0,
      sender_id: 1,
      sender_nickname: 'OhHeeJuice',
      sender_image_url: '',
      content: '안녕하세요~ 지아니스 나폴리 9시 맞나요?',
      created_at: new Date('2024-03-30T19:08:11'),
      status: 'MESSAGE',
    },
    {
      flashmob_id: 0,
      sender_id: 1,
      sender_nickname: 'OhHeeJuice',
      sender_image_url: '',
      content: '제가 너무 배가고파서 그런데 8시에 먹으면 안될까요?',
      created_at: new Date('2024-03-30T19:08:21'),
      status: 'MESSAGE',
    },
    {
      flashmob_id: 0,
      sender_id: 3,
      sender_nickname: 'KTaeGyu',
      sender_image_url: 'profileImg/sample.jpg',
      content: '좋아요~',
      created_at: new Date('2024-03-30T19:31:00'),
      status: 'MESSAGE',
    },
    {
      flashmob_id: 0,
      sender_id: 3,
      sender_nickname: 'KTaeGyu',
      sender_image_url: 'profileImg/sample.jpg',
      content: '',
      created_at: new Date('2024-03-30T21:11:20'),
      status: 'SETTLEMENT',
    },
  ],
  flashmob: {
    members: [],
  },
  settlements: {
    requester_settlements: [
      {
        settlement_id: 0,
        total_price: 70,
        currency_code: 'GBP',
        is_done: false,
        receiver_id: 3,
        receiver_nickname: 'KTaeGyu',
        receiver_image_url: 'profileImg/sample.jpg',
      },
      {
        settlement_id: 1,
        total_price: 40,
        currency_code: 'GBP',
        is_done: true,
        receiver_id: 3,
        receiver_nickname: 'KTaeGyu',
        receiver_image_url: 'profileImg/sample.jpg',
      },
    ],
    participant_settlements: [
      {
        settlement_id: 2,
        total_price: 70,
        currency_code: 'GBP',
        is_done: true,
        receiver_id: 1,
        receiver_nickname: 'OhHeeJuice',
        receiver_image_url: '',
      },
      {
        settlement_id: 3,
        total_price: 40,
        currency_code: 'GBP',
        is_done: false,
        receiver_id: 1,
        receiver_nickname: 'OhHeeJuice',
        receiver_image_url: '',
      },
    ],
  },
  receipt: {
    price: 70,
    receipts: [
      {
        business_name: 'Pork on Fire',
        created_at: '2024-03-25T12:30:00Z',
        price: 50,
      },
      {
        business_name: 'Fish and Chips',
        created_at: '2024-03-25T18:20:00Z',
        price: 20,
      },
    ],
  },
  settlement: {
    attendees: [
      {
        member_id: 3,
        member_nickname: 'KTaeGyu',
        member_image_url: 'profileImg/sample.jpg',
        price: 35,
        has_sent: true,
      },
      {
        member_id: 0,
        member_nickname: 'OhHeeJuice',
        member_image_url: '',
        price: 35,
        has_sent: false,
      },
    ],
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setFlashMobs: (state, action: PayloadAction<flashmob[]>) => {
      state.flashmobs = action.payload;
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
  setFlashMob,
  setSettlements,
  setReceipt,
  setSettlement,
} = chatSlice.actions;
export default chatSlice.reducer;
