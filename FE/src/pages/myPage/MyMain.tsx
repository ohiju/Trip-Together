import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import useGetSyncAccounts from '../../apis/account/useGetSyncAccounts';
import useGetTripAccounts from '../../apis/account/useGetTripAccounts';
import Menus from '../../components/myPage/main/Menus';
import Profile from '../../components/myPage/main/Profile';
import Wallet from '../../components/myPage/main/Wallet';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {Wrapper} from './MyMainStyle';

const MyMain = () => {
  const getSyncAccount = useGetSyncAccounts();
  const getTripAccount = useGetTripAccounts();

  // 탭바 숨기기
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

  // Api 호출
  useFocusEffect(() => {
    getSyncAccount();
    getTripAccount();
  });

  return (
    <Wrapper>
      <Wallet />
      <Menus />
      <Profile />
    </Wrapper>
  );
};

export default MyMain;
