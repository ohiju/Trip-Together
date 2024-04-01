import {ParamListBase} from '@react-navigation/native';
import {TabParams} from './TabParams';

interface PinAuthProps {
  pinData: object;
  api: string;
}

interface RootStackParams extends ParamListBase, TabParams {
  Main: undefined;
  Login: undefined;
  SocialLogin: undefined;
  PinAuth: PinAuthProps;
}

export type {PinAuthProps, RootStackParams};
