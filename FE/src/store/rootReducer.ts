import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {PersistConfig, persistReducer} from 'redux-persist';
import cardHistory from './slices/cardHistory';
import dummy from './slices/dummy';
import tabState from './slices/tabState';
import user from './slices/user';

export interface AppState {
  cardHistory: ReturnType<typeof cardHistory>;
  dummy: ReturnType<typeof dummy>;
  tabState: ReturnType<typeof tabState>;
  user: ReturnType<typeof user>;
}

const persistConfig: PersistConfig<any> = {
  key: 'persist',
  storage: AsyncStorage,
};

const reducers = {
  cardHistory,
  tabState,
  user,
};

const rootReducer = combineReducers({
  ...reducers,
  dummy: persistReducer(persistConfig, dummy),
});

export default rootReducer;
