import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {TripState} from '../../interfaces/states/TripState';

const initialState: TripState = {
  tripInfo: {
    plan_id: 0,
    start_region: '',
    start_at: new Date(),
    end_at: new Date(),
    title: '',
    total_estimated_budget: 0,
    total_budget: 0,
    status: 'done',
    daily_plans: [
      {
        attractions: [{attraction_id: 3}],
        order: 1,
        daily_estimated_budget: 0,
      },
    ],
  },
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setStartRegion: (state, action: PayloadAction<string>) => {
      state.tripInfo.start_region = action.payload;
    },
    setDate: (state, action: PayloadAction<{start_at: Date; end_at: Date}>) => {
      state.tripInfo.start_at = action.payload.start_at;
      state.tripInfo.end_at = action.payload.end_at;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.tripInfo.title = action.payload;
    },
  },
});

export const {setStartRegion, setDate, setTitle} = tripSlice.actions;

export default tripSlice.reducer;
