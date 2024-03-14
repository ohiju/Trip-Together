interface account {
  id: number;
  nation: string;
  nation_kr: string;
  unit: number;
  balance: number;
}

interface UserState {
  isLoggedIn: boolean;
  accounts: {
    trip_accounts: account[];
    trip_accounts_length: number;
  };
}

export type {UserState, account};
