import {currency} from '../constants/currencies';
import {bankAccount} from '../interfaces/bankAccount';
import {ExchangeDataResult} from '../interfaces/hooks/ExchangeData';

const useExchangeData = () => {
  const exchangeData = (
    fromData: currency,
    toData: currency,
    account: bankAccount,
    rate: number,
  ): ExchangeDataResult => {
    const from_unit = String.fromCharCode(fromData.unit);
    const to_unit = String.fromCharCode(toData.unit);
    const balance = Math.floor(account.balance / rate).toLocaleString('ko-KR');

    const result = {
      from: {
        nation_kr: fromData.nation_kr,
        nation: fromData.nation,
        isFrom: true,
        unit: from_unit,
        currency_code_kr: fromData.currency_code_kr,
        message: `1${from_unit} = ${rate}${to_unit}`,
      },
      to: {
        nation_kr: toData.nation_kr,
        nation: toData.nation,
        isFrom: false,
        unit: to_unit,
        currency_code_kr: toData.currency_code_kr,
        message: `충전 가능 최대 금액 ${balance} ${from_unit}`,
      },
    };

    return result;
  };

  return exchangeData;
};

export default useExchangeData;
