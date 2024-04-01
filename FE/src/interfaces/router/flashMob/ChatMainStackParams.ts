import {ParamListBase} from '@react-navigation/native';

interface ChatStackParams extends ParamListBase {
  ChatMain: undefined;
  ChatRoom: {flashmob_id: number};
  TranHistory: undefined;
}

export type {ChatStackParams};
