interface syncAccount {
  account_uuid: string;
  account_num: string;
  name: string;
  is_main: 0 | 1;
}

interface tripAccount {
  nation: string;
  nation_kr: string;
  unit: number;
  balance: number;
}

interface user {
  member_id: number;
  username: string;
  nickname: string;
  image_url: string;
  description: string;
  is_pin: boolean;
}

interface UserState {
  user: user;
  sync_accounts: syncAccount[];
  trip_accounts: tripAccount[];
}

export type {UserState, syncAccount, tripAccount, user};
