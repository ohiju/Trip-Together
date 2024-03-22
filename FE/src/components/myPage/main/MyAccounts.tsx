import React from 'react';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import MyAccount from './MyAccount';
import {Accounts, Wrapper} from './MyAccountsStyle';

const MyAccounts = () => {
  const tripAccounts = useAppSelector(
    (state: RootState) => state.user.userInfo.trip_accounts,
  );

  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <Accounts>
        {tripAccounts.map(account => (
          <MyAccount key={account.nation} myAccount={account} />
        ))}
      </Accounts>
    </Wrapper>
  );
};

export default MyAccounts;
