import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {bankAccount} from '../../../interfaces/bankAccount';
import {
  Balance,
  BalanceView,
  BankLogo,
  Option,
  OptionView,
  Wrapper,
} from './SyncOptionStyle';

interface SyncOptionProps {
  account: bankAccount;
}

const SyncOption = ({account}: SyncOptionProps) => {
  const balance = account.balance.toLocaleString('ko-KR');

  return (
    <Wrapper>
      <OptionView>
        <BankLogo source={imagePath.logobank} resizeMode="contain" />
        <Option>{account.account_num}</Option>
      </OptionView>
      <BalanceView>
        <Balance>잔액 {balance} 원</Balance>
      </BalanceView>
    </Wrapper>
  );
};

export default SyncOption;
