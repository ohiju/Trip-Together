import {bankAccount} from '../../assets/data/bankAccount';
import {currency} from '../../constants/currencies';

interface WithdrawProps {
  account: bankAccount;
  ammount: string;
  currency: currency;
  rate: number;
}

export type {WithdrawProps};
