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

interface DepositProps {
  rateText: string;
  ammountText: string;
}

const Deposit = ({rateText, ammountText}: DepositProps) => {
  return (
    <Wrapper>
      <TitleView>
        <TitleText>환전 희망 금액</TitleText>
      </TitleView>
      <RateView>
        <RateText>{rateText}</RateText>
      </RateView>
      <AmountView>
        <AmountText>{ammountText}</AmountText>
      </AmountView>
    </Wrapper>
  );
};

export default Deposit;
