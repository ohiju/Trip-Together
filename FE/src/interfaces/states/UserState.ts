interface userInfo {
  user_id: number;
  image_url: string;
  nickname: string;
  username: string;
  description: string;
  gender: 'M' | 'F';
}

interface account {
  id: number;
  nation: string;
  nation_kr: string;
  unit: number;
  balance: number;
}

interface accounts {
  trip_accounts: account[];
  trip_accounts_length: number;
}

interface UserState {
  isLoggedIn: boolean;
  userInfo: userInfo;
  accounts: accounts;
}

export type {UserState, account, accounts, userInfo};
