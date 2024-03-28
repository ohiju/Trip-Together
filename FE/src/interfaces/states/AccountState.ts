import {bankAccount} from '../bankAccount';

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
interface AccountState {
  sync_accounts: syncAccount[];
  trip_accounts: tripAccount[];
  bank_accounts: bankAccount[];
  rate: number;
}

export type {AccountState, syncAccount, tripAccount};
