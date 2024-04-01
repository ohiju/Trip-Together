import React from 'react';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Placeholder, PlaceholderView, Wrapper} from './NoAccountStyle';

const NoAccount = () => {
  const syncAccounts = useAppSelector(
    (state: RootState) => state.account.sync_accounts,
  );

  return (
    <Wrapper>
      <PlaceholderView>
        <Placeholder>
          {syncAccounts.length
            ? '환전된 외화가 없습니다.'
            : '연동된 계좌가 없습니다.'}
        </Placeholder>
      </PlaceholderView>
    </Wrapper>
  );
};

export default NoAccount;
