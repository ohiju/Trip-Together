import React from 'react';
import {bankAccount} from '../assets/data/bankAccount';
import ExchangeOption from '../components/myPage/exchange/ExchangeOption';
import SyncOption from '../components/myPage/sync/SyncOption';
import {RootState} from '../store';
import {useAppSelector} from '../store/hooks';

interface AppOption<T> {
  node: JSX.Element;
  data: T;
}

const useSyncOptions = () => {
  const bankAccounts = useAppSelector(
    (state: RootState) => state.account.bank_accounts,
  );

  const syncOptions: AppOption<bankAccount>[] = bankAccounts.map(account => {
    return {
      node: <SyncOption account={account} />,
      data: account,
    };
  });

  return syncOptions;
};

const useExchangeOptions = (): AppOption<bankAccount>[] => {
  const syncAccounts = useAppSelector(
    (state: RootState) => state.account.sync_accounts,
  );
  const bankAccounts = useAppSelector(
    (state: RootState) => state.account.bank_accounts,
  );

  const exchangeOptions = syncAccounts
    .map(account => {
      const data = bankAccounts.find(
        bank_account => bank_account.account_uuid === account.account_uuid,
      );

      if (!data) return;

      return {
        node: <ExchangeOption account={account} />,
        data,
      };
    })
    .filter(option => option !== undefined) as AppOption<bankAccount>[];

  return exchangeOptions;
};

export {useExchangeOptions, useSyncOptions};
export type {AppOption};
