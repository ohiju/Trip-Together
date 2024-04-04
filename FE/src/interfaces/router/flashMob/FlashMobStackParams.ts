import {ParamListBase} from '@react-navigation/native';
import {ChatStackParams} from './ChatMainStackParams';
import {SettlementStackParams} from './SettlementStackParams';
import {TranHistoryStackParams} from './TranHistoryStackParams';

interface FlashMobStackParams
  extends ParamListBase,
    ChatStackParams,
    SettlementStackParams,
    TranHistoryStackParams {
  FlashMain: undefined;
  FlashPlaces: {theme: string};
  FlashPlace: undefined;
  FlashCreate: {id: number};
  // FlashList: undefined;
}

export type {FlashMobStackParams};
