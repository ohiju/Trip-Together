import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {syncAccount} from '../../../interfaces/states/UserState';
import {BankLogo, Option, OptionView, Wrapper} from './ExchangeOptionStyle';

interface ExchangeOptionProps {
  account: syncAccount;
}

const ExchangeOption = ({account}: ExchangeOptionProps) => {
  return (
    <Wrapper>
      <OptionView>
        <BankLogo source={imagePath.bankLogo} resizeMode="contain" />
        <Option>{account.account_num}</Option>
      </OptionView>
    </Wrapper>
  );
};

export default ExchangeOption;
