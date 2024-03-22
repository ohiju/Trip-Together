import user from '../slices/user';
import dummy from './../slices/dummy';
import tabState from './../slices/tabState';

export interface AppState {
  dummy: ReturnType<typeof dummy>;
  tabState: ReturnType<typeof tabState>;
  user: ReturnType<typeof user>;
}

export const reducers = {
  tabState,
  user,
};

export const asyncReducers = {
  dummy,
};

export const encryptReducers = {
  dummy,
};
