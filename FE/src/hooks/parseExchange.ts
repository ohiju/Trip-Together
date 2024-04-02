import {currency} from '../constants/currencies';

interface ParseExchangeProps {
  from_currency: currency;
  to_currency: currency;
  ammount: string;
  rate: number;
  type: 'exchange' | 'refund';
}

const parseExchange = ({
  from_currency,
  to_currency,
  ammount,
  rate,
  type,
}: ParseExchangeProps) => {
  const currency_code_kr =
    type === 'exchange'
      ? to_currency.currency_code_kr
      : from_currency.currency_code_kr;
  const rateText = `1 원 = ${rate} ${currency_code_kr}`;

  const unit =
    type === 'exchange'
      ? String.fromCharCode(to_currency.unit)
      : String.fromCharCode(from_currency.unit);
  const ammountText = `${parseInt(ammount, 10).toLocaleString(
    'ko-KR',
  )} ${unit}`;

  return {rateText, ammountText};
};

export default parseExchange;
