import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import Menus from '../../components/myPage/main/Menus';
import Profile from '../../components/myPage/main/Profile';
import Wallet from '../../components/myPage/main/Wallet';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {Wrapper} from './MainStyle';

const MyPageMain = () => {
  const dispatch = useAppDispatch();

  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

  return (
    <Wrapper>
      <Wallet />
      <Menus />
      <Profile />
    </Wrapper>
  );
};

export default MyPageMain;
