import {ParamListBase} from '@react-navigation/native';
import {bankAccount} from '../../../assets/data/bankAccount';
import {currency} from '../../../constants/currencies';

interface ExchangeStackParams extends ParamListBase {
  ExchangeSearch: undefined;
  ExchangeSelectSync: {currency: currency};
  ExchangeInput: {account: bankAccount; currency: currency};
  ExchangeConfirm: {
    account: bankAccount;
    currency: currency;
    ammount: string;
    rate: number;
  };
}

export type {ExchangeStackParams};
