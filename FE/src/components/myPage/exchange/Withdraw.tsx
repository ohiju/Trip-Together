import React from 'react';
import {WithdrawProps} from '../../../interfaces/props/WithdrawProps';
import {
  Hr,
  ItemContentText,
  ItemTitleText,
  ItemView,
  SubTitleText,
  SubTitleView,
  TitleText,
  TitleView,
  Wrapper,
} from './WithdrawStyle';

const Withdraw = ({account, ammount, currency, rate}: WithdrawProps) => {
  const {account_num} = account;
  const balance = account.balance.toLocaleString('ko-KR');
  const unit = String.fromCharCode(currency.unit);
  const withdraw = Math.floor(parseInt(ammount, 10) * rate);
  const WithdrawStr = withdraw.toLocaleString('ko-KR');
  const change = (account.balance - withdraw).toLocaleString('ko-KR');

  return (
    <Wrapper>
      <TitleView>
        <TitleText>출금 상세</TitleText>
      </TitleView>
      <SubTitleView>
        <SubTitleText>계좌 정보</SubTitleText>
      </SubTitleView>
      <ItemView>
        <ItemTitleText>계좌 번호</ItemTitleText>
        <ItemContentText>{account_num}</ItemContentText>
      </ItemView>
      <ItemView>
        <ItemTitleText>잔액</ItemTitleText>
        <ItemContentText>{balance} 원</ItemContentText>
      </ItemView>
      <SubTitleView>
        <SubTitleText>출금 정보</SubTitleText>
      </SubTitleView>
      <ItemView>
        <ItemTitleText>충전 금액</ItemTitleText>
        <ItemContentText>
          {ammount} {unit}
        </ItemContentText>
      </ItemView>
      <ItemView>
        <ItemTitleText>환율</ItemTitleText>
        <ItemContentText>1 : {rate}</ItemContentText>
      </ItemView>
      <ItemView>
        <ItemTitleText>출금 금액</ItemTitleText>
        <ItemContentText>{WithdrawStr} 원</ItemContentText>
      </ItemView>
      <Hr />
      <ItemView>
        <ItemTitleText>충전 후 잔액</ItemTitleText>
        <ItemContentText>{change} 원</ItemContentText>
      </ItemView>
    </Wrapper>
  );
};

export default Withdraw;
