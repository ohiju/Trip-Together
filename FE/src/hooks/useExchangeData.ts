import {currency} from '../constants/currencies';
import {bankAccount} from '../interfaces/bankAccount';
import {ExchangeDataResult} from '../interfaces/hooks/ExchangeData';
import {tripAccount as tripAccountType} from '../interfaces/states/AccountState';

const useExchangeData = () => {
  const exchangeData = (
    fromData: currency,
    toData: currency,
    account: bankAccount,
    rate: number,
    type: 'exchange' | 'refund',
    tripAccount?: tripAccountType,
  ): ExchangeDataResult => {
    const from_unit = String.fromCharCode(fromData.unit);
    const to_unit = String.fromCharCode(toData.unit);
    const balance =
      type === 'refund' && tripAccount
        ? Math.floor(tripAccount.balance).toLocaleString('ko-KR')
        : Math.floor(account.balance / rate).toLocaleString('ko-KR');

    const result =
      type === 'refund' && tripAccount
        ? {
            to: {
              nation_kr: fromData.nation_kr,
              nation: fromData.nation,
              isFrom: false,
              unit: from_unit,
              currency_code_kr: fromData.currency_code_kr,
              message: `환불 가능 최대 금액 ${balance} ${from_unit}`,
            },
            from: {
              nation_kr: toData.nation_kr,
              nation: toData.nation,
              isFrom: true,
              unit: to_unit,
              currency_code_kr: toData.currency_code_kr,
              message: `1${from_unit} = ${rate}${to_unit}`,
            },
          }
        : {
            to: {
              nation_kr: toData.nation_kr,
              nation: toData.nation,
              isFrom: false,
              unit: to_unit,
              currency_code_kr: toData.currency_code_kr,
              message: `충전 가능 최대 금액 ${balance} ${from_unit}`,
            },
            from: {
              nation_kr: fromData.nation_kr,
              nation: fromData.nation,
              isFrom: true,
              unit: from_unit,
              currency_code_kr: fromData.currency_code_kr,
              message: `1${from_unit} = ${rate}${to_unit}`,
            },
          };

    return result;
  };

  return exchangeData;
};

export default useExchangeData;
