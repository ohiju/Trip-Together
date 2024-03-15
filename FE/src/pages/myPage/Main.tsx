import React from 'react';
import Menus from '../../components/myPage/main/Menus';
import Profile from '../../components/myPage/main/Profile';
import Wallet from '../../components/myPage/main/Wallet';
import {BasicRouteProps} from '../../interfaces/props/BasicRouteProps';
import {MyPageStackParams} from '../../interfaces/router/MyPageStackParams';
import {Wrapper} from './MainStyle';

const MyPageMain = ({navigation}: BasicRouteProps<MyPageStackParams>) => {
  return (
    <Wrapper>
      <Wallet navigation={navigation} />
      <Menus />
      <Profile />
    </Wrapper>
  );
};

export default MyPageMain;
