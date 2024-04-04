import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import Account from '../../components/myPage/syncManage/Account';
import {RootState} from '../../store';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {Wrapper} from './SyncManageStyle';

const SyncManage = () => {
  const syncAccounts = useAppSelector(
    (state: RootState) => state.account.sync_accounts,
  );

  // 탭바
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  return (
    <Wrapper>
      {syncAccounts.map(account => (
        <Account key={account.account_uuid} account={account} />
      ))}
    </Wrapper>
  );
};

export default SyncManage;
