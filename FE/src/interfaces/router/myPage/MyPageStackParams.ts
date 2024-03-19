import {ParamListBase} from '@react-navigation/native';
import {ExchangeStackParams} from './ExchangeStackParams';
import {PinStackParams} from './PinStackParams';
import {SyncStackParams} from './SyncStackParams';

interface MyPageStackParams
  extends ParamListBase,
    PinStackParams,
    ExchangeStackParams,
    SyncStackParams {
  MyMain: undefined;
  Pin: undefined;
  Exchange: undefined;
}

export type {MyPageStackParams};
