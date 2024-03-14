import React from 'react';
import MyWallet from './MyWallet';
import NoWallet from './NoWallet';
import {WalletBox, Wrapper} from './WalletStyle';

const Wallet = () => {
  const isPin = false;

  return (
    <Wrapper>
      <WalletBox>{isPin ? <MyWallet /> : <NoWallet />}</WalletBox>
    </Wrapper>
  );
};

export default Wallet;
