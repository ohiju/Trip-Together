import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import NotYet from '../../assets/data/NotYet';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';

const WalletManage = () => {
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  return (
    <>
      <NotYet />
    </>
  );
};

export default WalletManage;
