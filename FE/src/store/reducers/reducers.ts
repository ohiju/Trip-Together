import user from '../slices/user';
import dummy from './../slices/dummy';
import tabState from './../slices/tabState';

export interface AppState {
  user: ReturnType<typeof user>;
  dummy: ReturnType<typeof dummy>;
  tabState: ReturnType<typeof tabState>;
}

export const reducers = {
  user,
  tabState,
};

export const asyncReducers = {
  dummy,
};

export const encryptReducers = {
  dummy,
};
