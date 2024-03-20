import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {PersistConfig, persistReducer} from 'redux-persist';
import {asyncReducers} from './reducers';

const asyncReducer = combineReducers({...asyncReducers});
type asyncReducerState = ReturnType<typeof asyncReducer>;

const persistConfig: PersistConfig<asyncReducerState> = {
  key: 'asyn',
  storage: AsyncStorage,
};

const asyncPersistReducer = persistReducer(persistConfig, asyncReducer);

export default asyncPersistReducer;
