import {ParamListBase} from '@react-navigation/native';
import {ExchangeStackParams} from './ExchangeStackParams';
import {PinStackParams} from './PinStackParams';
import {ProfileStackParams} from './ProfileStackParams';
import {SyncStackParams} from './SyncStackParams';

interface MyPageStackParams
  extends ParamListBase,
    PinStackParams,
    ExchangeStackParams,
    SyncStackParams,
    ProfileStackParams {
  MyMain: undefined;
  WalletManage: undefined;
  PinManage: undefined;
  SyncManage: undefined;
  CardHistory: undefined;
}

export type {MyPageStackParams};
