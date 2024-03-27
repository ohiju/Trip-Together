import {ParamListBase} from '@react-navigation/native';
import {TabParams} from './TabParams';

interface PinAuthProps {
  api: ((data?: any) => Promise<void>) | ((data?: any) => void);
  data: object;
}

interface RootStackParams extends ParamListBase, TabParams {
  Main: undefined;
  Login: undefined;
  SocialLogin: undefined;
  PinAuth: PinAuthProps;
}

export type {RootStackParams};
