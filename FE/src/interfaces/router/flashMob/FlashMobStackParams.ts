import {ParamListBase} from '@react-navigation/native';
import {ChatStackParams} from './ChatMainStackParams';

interface FlashMobStackParams extends ParamListBase, ChatStackParams {
  FlashMain: undefined;
  FlashPlaces: {theme: string};
  FlashPlace: undefined;
  FlashCreate: {id: number};
  // FlashList: undefined;
}

export type {FlashMobStackParams};
