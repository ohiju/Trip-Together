import {BeforeLoginStackParams} from './MainStackParams';
import {MyPageStackParams} from './MyPageStackParams';
import {PinStackParams} from './PinStackParams';
import {TravelStackParams} from './TravelStackParams';

interface RootStackParams
  extends BeforeLoginStackParams,
    MyPageStackParams,
    PinStackParams,
    TravelStackParams {}

export type {RootStackParams};
