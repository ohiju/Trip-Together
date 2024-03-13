import user from '../slices/user';

export interface AppState {
  user: ReturnType<typeof user>;
}

export const reducers = {
  user,
};

export const asyncReducers = {
  user,
};

export const encryptReducers = {
  user,
};
