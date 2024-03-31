import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BagState, BagItem} from '../../interfaces/states/BagState';

const initialState: BagState = {
  bagInfo: [],
};

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItemToBag: (state, action: PayloadAction<BagItem>) => {
      state.bagInfo.push(action.payload);
    },
    deleteItemFromBag: (state, action: PayloadAction<number>) => {
      state.bagInfo = state.bagInfo.filter(
        item => item.attraction_id !== action.payload,
      );
    },
  },
});

export const {addItemToBag, deleteItemFromBag} = bagSlice.actions;

export default bagSlice.reducer;
