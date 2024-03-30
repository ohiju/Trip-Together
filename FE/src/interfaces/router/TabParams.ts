import {ParamListBase} from '@react-navigation/native';
import {TravelStackParams} from './TripStackParams';
import {FlashMobStackParams} from './flashMob/FlashMobStackParams';
import {MyPageStackParams} from './myPage/MyPageStackParams';

interface TabParams
  extends ParamListBase,
    TravelStackParams,
    MyPageStackParams,
    FlashMobStackParams {
  Trip: undefined;
  FlashMob: undefined;
  MyPage: undefined;
}

export type {TabParams};
