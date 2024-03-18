import {ParamListBase} from '@react-navigation/native';
import {TabParams} from './TabParams';

interface RootStackParams extends ParamListBase, TabParams {
  Main: undefined;
  Login: undefined;
  SocialLogin: undefined;
}

export type {RootStackParams};
