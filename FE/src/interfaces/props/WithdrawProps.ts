import {currency} from '../../constants/currencies';
import {bankAccount} from '../bankAccount';

interface WithdrawProps {
  account: bankAccount;
  ammount: string;
  currency: currency;
  rate: number;
}

export type {WithdrawProps};
