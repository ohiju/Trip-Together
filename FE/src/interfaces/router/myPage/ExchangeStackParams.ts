import {ParamListBase} from '@react-navigation/native';
import {currency} from '../../../constants/currencies';
import {bankAccount} from '../../bankAccount';
import {tripAccount} from '../../states/AccountState';

interface ExchangeSelectSyncProps {
  from_currency: currency;
  to_currency: currency;
  type: 'exchange' | 'refund';
  tripAccount?: tripAccount;
}

interface ExchangeInputProps extends ExchangeSelectSyncProps {
  account: bankAccount;
}

interface ExchangeConfirmProps extends ExchangeInputProps {
  ammount: string;
  rate: number;
}

interface ExchangeStackParams extends ParamListBase {
  ExchangeSearch: undefined;
  ExchangeSelectSync: ExchangeSelectSyncProps;
  ExchangeInput: ExchangeInputProps;
  ExchangeConfirm: ExchangeConfirmProps;
}

export type {
  ExchangeConfirmProps,
  ExchangeInputProps,
  ExchangeSelectSyncProps,
  ExchangeStackParams,
};
