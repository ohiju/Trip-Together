import {ParamListBase} from '@react-navigation/native';
import {ChatStackParams} from './ChatMainStackParams';

interface FlashMobStackParams extends ParamListBase, ChatStackParams {
  FlashMain: undefined;
  FlashPlaces: undefined;
  FlashPlace: undefined;
  FlashCreate: undefined;
  FlashList: undefined;
}

export type {FlashMobStackParams};
