import React from 'react';
import {roundNationImagePath} from '../../../assets/images/imagePath';
import {account} from '../../../interfaces/states/UserState';
import {
  Balance,
  BalanceView,
  Country,
  CountryView,
  Flag,
  Wrapper,
} from './MyAccountStyle';

interface MyAccountProps {
  myAccount: account;
}

const MyAccount = ({myAccount}: MyAccountProps) => {
  const {nation, nation_kr, balance} = myAccount;
  const unit = String.fromCharCode(myAccount.unit);

  return (
    <Wrapper>
      <CountryView>
        <Flag source={roundNationImagePath[nation]} resizeMode="contain" />
        <Country>{nation_kr}</Country>
      </CountryView>
      <BalanceView>
        <Balance>
          {unit} {balance}
        </Balance>
      </BalanceView>
    </Wrapper>
  );
};

export default MyAccount;
