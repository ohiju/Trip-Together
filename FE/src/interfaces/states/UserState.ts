interface syncAccount {
  uuid: string;
  account_num: string;
  name: string;
  is_main: 0 | 1;
}

interface tripAccount {
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
  sync_accounts: syncAccount[];
  sync_accounts_length: number;
  trip_accounts: tripAccount[];
  trip_accounts_length: number;
}

interface UserState {
  isLoggedIn: boolean;
  userInfo: userInfo;
}

export type {UserState, syncAccount, tripAccount, userInfo};
