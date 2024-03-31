import {combineReducers} from 'redux';
import account from './slices/account';
import bag from './slices/bag';
import cardHistory from './slices/cardHistory';
import tabState from './slices/tabState';
import trip from './slices/trip';
import user from './slices/user';

export interface AppState {
  account: ReturnType<typeof account>;
  bag: ReturnType<typeof bag>;
  cardHistory: ReturnType<typeof cardHistory>;
  tabState: ReturnType<typeof tabState>;
  trip: ReturnType<typeof trip>;
  user: ReturnType<typeof user>;
}

const reducers = {
  account,
  bag,
  cardHistory,
  tabState,
  trip,
  user,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
