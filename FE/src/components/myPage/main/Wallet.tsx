import React from 'react';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import MyWallet from './MyWallet';
import NoWallet from './NoWallet';
import {WalletBox, Wrapper} from './WalletStyle';

const Wallet = () => {
  const isPin = useAppSelector((state: RootState) => state.user.user.is_pin);

  return (
    <Wrapper>
      <WalletBox>{isPin ? <MyWallet /> : <NoWallet />}</WalletBox>
    </Wrapper>
  );
};

export default Wallet;
