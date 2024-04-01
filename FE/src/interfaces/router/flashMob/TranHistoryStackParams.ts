import {ParamListBase} from '@react-navigation/native';

interface TranHistoryStackParams extends ParamListBase {
  TranHistory: {flashmob_id: number};
  Receipt: {
    flashmob_id: number;
    settlement_id: number;
    currency_code: string;
    is_done: boolean;
  };
  CurSitu: {flashmob_id: number; settlement_id: number; currency_code: string};
}

export type {TranHistoryStackParams};
