interface account {
  id: number;
  nation: string;
  nation_kr: string;
  unit: number;
  balance: number;
}
interface userInfo {
  user_id: number;
  image_url: string;
  nickname: string;
  username: string;
  description: string;
  is_pin: boolean;
  trip_accounts: account[];
  trip_accounts_length: number;
}

interface UserState {
  isLoggedIn: boolean;
  userInfo: userInfo;
}

export type {UserState, account, userInfo};
