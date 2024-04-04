import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {tripAccount} from '../../../interfaces/states/UserState';
import {
  Balance,
  BalanceView,
  Country,
  CountryView,
  Flag,
  Wrapper,
} from './MyAccountStyle';

interface MyAccountProps {
  myAccount: tripAccount;
}

const MyAccount = ({myAccount}: MyAccountProps) => {
  const {nation, nation_kr, balance} = myAccount;
  const unit = String.fromCharCode(myAccount.unit);

  return (
    <Wrapper>
      <CountryView>
        <Flag
          source={imagePath[`${nation.toLowerCase()}round`]}
          resizeMode="cover"
        />
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
