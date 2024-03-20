import {ParamListBase} from '@react-navigation/native';
import {MyPageStackParams} from './myPage/MyPageStackParams';

interface TabParams extends ParamListBase, MyPageStackParams {
  Trip: undefined;
  FlashMob: undefined;
  MyPage: undefined;
}

export type {TabParams};
