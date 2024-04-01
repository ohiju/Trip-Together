import {ParamListBase} from '@react-navigation/native';
import {ChatStackParams} from './ChatMainStackParams';
import {SettlementStackParams} from './SettlementStackParams';

interface FlashMobStackParams
  extends ParamListBase,
    ChatStackParams,
    SettlementStackParams {
  FlashMain: undefined;
  FlashPlaces: {theme: string};
  FlashPlace: undefined;
  FlashCreate: undefined;
  FlashList: undefined;
}

export type {FlashMobStackParams};
