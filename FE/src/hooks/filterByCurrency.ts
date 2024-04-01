import {currency as currencyType} from '../constants/currencies';

const filterByCurrency = <T extends {nation: string}>(
  items: T[],
  currency: currencyType,
) => {
  const result = items.filter(item => item.nation === currency.nation);

  return result;
};

export default filterByCurrency;
