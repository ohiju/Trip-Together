interface currency {
  continent: string;
  currency_code: string;
  currency_code_kr: string;
  nation: string;
  nation_kr: string;
  unit: number;
}

const currencies: currency[] = [
  {
    continent: 'Europe',
    currency_code: 'EUR',
    currency_code_kr: '유로',
    nation: 'EU',
    nation_kr: '유럽 연합',
    unit: 8364,
  },
  {
    continent: 'Europe',
    currency_code: 'GBP',
    currency_code_kr: '파운드 스털링',
    nation: 'UK',
    nation_kr: '영국',
    unit: 163,
  },
  {
    continent: 'Asia',
    currency_code: 'KRW',
    currency_code_kr: '원',
    nation: 'KR',
    nation_kr: '한국',
    unit: 8361,
  },
];

const kr_currency: currency = {
  continent: 'Asia',
  currency_code: 'KRW',
  currency_code_kr: '원',
  nation: 'KR',
  nation_kr: '한국',
  unit: 8361,
};

export {kr_currency};
export type {currency};
export default currencies;
