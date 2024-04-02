import {ParamListBase} from '@react-navigation/native';

interface TranHistoryProps {
  flashmob_id: number;
}

interface ReceiptProps {
  flashmob_id: number;
  settlement_id: number;
  currency_code: string;
}

interface CurSituProps {
  flashmob_id: number;
  settlement_id: number;
  currency_code: string;
}

interface TranHistoryStackParams extends ParamListBase {
  TranHistory: TranHistoryProps;
  Receipt: ReceiptProps;
  CurSitu: CurSituProps;
}

export type {
  CurSituProps,
  ReceiptProps,
  TranHistoryProps,
  TranHistoryStackParams,
};
