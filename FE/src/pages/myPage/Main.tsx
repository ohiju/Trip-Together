import React from 'react';
import Menus from '../../components/myPage/main/Menus';
import Profile from '../../components/myPage/main/Profile';
import Wallet from '../../components/myPage/main/Wallet';
import {Wrapper} from './MainStyle';

const MyPageMain = () => {
  return (
    <Wrapper>
      <Wallet />
      <Menus />
      <Profile />
    </Wrapper>
  );
};

export default MyPageMain;
