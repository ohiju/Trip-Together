import React from 'react';
import bankAccounts, {bankAccount} from '../assets/data/bankAccount';
import ExchangeOption from '../components/myPage/exchange/ExchangeOption';
import SyncOption from '../components/myPage/sync/SyncOption';
import {RootState} from '../store';
import {useAppSelector} from '../store/hooks';

interface AppOption<T> {
  node: JSX.Element;
  data: T;
}

const syncOptions: AppOption<bankAccount>[] = bankAccounts.map(account => {
  return {
    node: <SyncOption account={account} />,
    data: account,
  };
});

const useExchangeOptions = (): AppOption<bankAccount>[] => {
  const syncAccounts = useAppSelector(
    (state: RootState) => state.user.userInfo.sync_accounts,
  );

  // 계좌 목록 조화 API
  const bank_data = bankAccounts;

  const exchangeOptions = syncAccounts.map(account => {
    const data = bank_data.find(
      bank_account => bank_account.account_uuid === account.account_uuid,
    );

    return {
      node: <ExchangeOption account={account} />,
      data,
    };
  });

  return exchangeOptions;
};

export {syncOptions, useExchangeOptions};
export type {AppOption};
