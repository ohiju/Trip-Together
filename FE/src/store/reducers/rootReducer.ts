import {combineReducers} from 'redux';
import asyncPersistReducer from './asyncReducer';
import encryptPersistReducer from './encryptReducer';
import {reducers} from './reducers';

export interface AppReducerState {}

const rootReducer = combineReducers({
  ...reducers,
  asyn: asyncPersistReducer,
  encrypt: encryptPersistReducer,
});

export default rootReducer;
