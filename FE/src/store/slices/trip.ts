import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {TripState} from '../../interfaces/states/TripState';

interface PlaceProp {
  address: string;
  attraction_id: number;
  avg_price: number;
  avg_rating: number;
  latitude: string;
  longitude: string;
  name: string;
  thumbnail_image_url: string;
}

interface attractionProp {
  attraction_id: number;
  thumbnail_image_url: string;
  name: string;
  address: string;
  avg_rating: string;
  avg_price: string;
}

interface CityResult {
  region_id: number;
  nation: string;
  city_name: string;
  latitude: string;
  longitude: string;
}

interface dailyplanProp {
  order: number;
  attraction: attractionProp;
}

interface dailydeleteProp {
  order: number;
  attraction_id: number;
}

const initialState: TripState = {
  tripInfo: {
    plan_id: 0,
    nation: '',
    start_latitude: '',
    start_longitude: '',
    start_region: 1,
    city_name: '',
    start_at: '',
    end_at: '',
    title: '',
    total_estimated_budget: 0,
    total_budget: 0,
    status: 'before',
    places: [],
    daily_plans: [],
  },
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setStartRegion: (state, action: PayloadAction<CityResult>) => {
      state.tripInfo.start_region = action.payload.region_id;
      state.tripInfo.nation = action.payload.nation;
      state.tripInfo.start_latitude = action.payload.latitude;
      state.tripInfo.start_longitude = action.payload.longitude;
      state.tripInfo.city_name = action.payload.city_name;
    },
    setLocation: (
      state,
      action: PayloadAction<{latitude: string; longitude: string}>,
    ) => {
      state.tripInfo.start_latitude = action.payload.latitude;
      state.tripInfo.start_longitude = action.payload.longitude;
    },
    setDate: (
      state,
      action: PayloadAction<{start_at: string; end_at: string}>,
    ) => {
      state.tripInfo.start_at = action.payload.start_at;
      state.tripInfo.end_at = action.payload.end_at;

      const startDate = new Date(action.payload.start_at);
      const endDate = new Date(action.payload.end_at);
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

      state.tripInfo.daily_plans = Array.from(
        {length: diffDays},
        (_, index) => {
          return {
            attractions: [],
            order: index,
            daily_estimated_budget: 0,
          };
        },
      );
    },
    setTripTitle: (state, action: PayloadAction<string>) => {
      state.tripInfo.title = action.payload;
    },
    addDailyPlan: (state, action: PayloadAction<dailyplanProp>) => {
      const {order, attraction} = action.payload;
      state.tripInfo.daily_plans[order].attractions.push(attraction);
    },
    deleteDailyPlan: (state, action: PayloadAction<dailydeleteProp>) => {
      const {order, attraction_id} = action.payload;
      state.tripInfo.daily_plans[order].attractions =
        state.tripInfo.daily_plans[order].attractions.filter(
          item => item.attraction_id !== attraction_id,
        );
    },
    setPlaces: (state, action: PayloadAction<PlaceProp[]>) => {
      state.tripInfo.places = action.payload;
    },
  },
});

export const {
  setStartRegion,
  setDate,
  setTripTitle,
  addDailyPlan,
  deleteDailyPlan,
  setPlaces,
  setLocation,
} = tripSlice.actions;

export default tripSlice.reducer;
