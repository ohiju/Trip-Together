interface ExchangeData {
  nation_kr: string;
  nation: string;
  isFrom: boolean;
  unit: string;
  currency_code_kr: string;
  message: string;
}

interface ExchangeDataResult {
  from: ExchangeData;
  to: ExchangeData;
}

export type {ExchangeData, ExchangeDataResult};
