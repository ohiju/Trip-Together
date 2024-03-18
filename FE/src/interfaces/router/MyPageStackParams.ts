import {ParamListBase} from '@react-navigation/native';
import {PinStackParams} from './PinStackParams';

interface MyPageStackParams extends ParamListBase, PinStackParams {
  MyMain: undefined;
  Pin: undefined;
  Exchange: undefined;
}

export type {MyPageStackParams};
