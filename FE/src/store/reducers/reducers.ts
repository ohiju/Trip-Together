import user, {userSlice} from '../slices/user';
import dummy from './../slices/dummy';

export interface AppState {
  user: ReturnType<typeof user>;
  dummy: ReturnType<typeof dummy>;
}

export const reducers = {
  user: userSlice.reducer,
};

export const asyncReducers = {
  dummy,
};

export const encryptReducers = {
  dummy,
};
