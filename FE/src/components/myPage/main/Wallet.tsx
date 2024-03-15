import React from 'react';
import {BasicRouteProps} from '../../../interfaces/props/BasicRouteProps';
import {MyPageStackParams} from '../../../interfaces/router/MyPageStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import MyWallet from './MyWallet';
import NoWallet from './NoWallet';
import {WalletBox, Wrapper} from './WalletStyle';

const Wallet = ({navigation}: BasicRouteProps<MyPageStackParams>) => {
  const isPin = useAppSelector(
    (state: RootState) => state.user.userInfo.is_pin,
  );

  return (
    <Wrapper>
      <WalletBox>
        {isPin ? <MyWallet /> : <NoWallet navigation={navigation} />}
      </WalletBox>
    </Wrapper>
  );
};

export default Wallet;
