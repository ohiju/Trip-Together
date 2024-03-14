import EncryptedStorage from 'react-native-encrypted-storage';
import {combineReducers} from 'redux';
import {PersistConfig, persistReducer} from 'redux-persist';
import {encryptReducers} from './reducers';

const encryptReducer = combineReducers({...encryptReducers});
type encryptReducerState = ReturnType<typeof encryptReducer>;

const persistConfig: PersistConfig<encryptReducerState> = {
  key: 'encrypt',
  storage: EncryptedStorage,
};

const encryptPersistReducer = persistReducer(persistConfig, encryptReducer);

export default encryptPersistReducer;
