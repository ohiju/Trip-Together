import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BagState, BagItem} from '../../interfaces/states/BagState';

const initialState: BagState = {
  bagInfo: [
    {
      attraction_id: 1,
      thumbnail_image_url: '',
      name: 'La Sagrada Familia',
      address: '',
      avg_rating: 4.9,
      avg_price: 123,
    },
  ],
};

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItemToBag: (state, action: PayloadAction<BagItem>) => {
      state.bagInfo.push(action.payload);
    },
  },
});

export const {addItemToBag} = bagSlice.actions;

export default bagSlice.reducer;
