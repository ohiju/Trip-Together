import React from 'react';
import {DepositProps} from '../../../interfaces/props/DepositProps';
import {
  AmountText,
  AmountView,
  RateText,
  RateView,
  TitleText,
  TitleView,
  Wrapper,
} from './DepositStyle';

const Deposit = ({ammount, currency}: DepositProps) => {
  const {currency_code_kr} = currency;
  const unit = String.fromCharCode(currency.unit);

  return (
    <Wrapper>
      <TitleView>
        <TitleText>환전 희망 금액</TitleText>
      </TitleView>
      <RateView>
        <RateText>1 {currency_code_kr} = 1400 원</RateText>
      </RateView>
      <AmountView>
        <AmountText>
          {ammount} {unit}
        </AmountText>
      </AmountView>
    </Wrapper>
  );
};

export default Deposit;
