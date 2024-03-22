import React from 'react';
import {bankAccount} from '../../../assets/data/bankAccount';
import {imagePath} from '../../../assets/images/imagePath';
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
        <BankLogo source={imagePath.bankLogo} resizeMode="contain" />
        <Option>{account.account_num}</Option>
      </OptionView>
      <BalanceView>
        <Balance>잔액 {balance} 원</Balance>
      </BalanceView>
    </Wrapper>
  );
};

export default SyncOption;
