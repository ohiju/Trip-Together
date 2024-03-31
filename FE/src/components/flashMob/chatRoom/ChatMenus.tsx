import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlashMobStackParams} from '../../../interfaces/router/flashMob/FlashMobStackParams';
import {BtnText, BtnView, Wrapper} from './ChatMenusStyle';

const ChatMenus = () => {
  // 라우팅
  const navigation = useNavigation<NavigationProp<FlashMobStackParams>>();
  const handleToSettlement = () => {
    navigation.navigate('Settlement');
  };
  const handleToTranHistory = () => {
    navigation.navigate('TranHistory');
  };

  return (
    <Wrapper>
      <BtnView onPress={handleToSettlement}>
        <BtnText>정산하기</BtnText>
      </BtnView>
      <BtnView onPress={handleToTranHistory}>
        <BtnText>정산내역</BtnText>
      </BtnView>
    </Wrapper>
  );
};

export default ChatMenus;
