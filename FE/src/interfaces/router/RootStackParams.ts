import {BeforeLoginStackParams} from './MainStackParams';
import {MyPageStackParams} from './MyPageStackParams';
import {PinStackParams} from './PinStackParams';

interface RootStackParams
  extends BeforeLoginStackParams,
    MyPageStackParams,
    PinStackParams {}

export type {RootStackParams};
