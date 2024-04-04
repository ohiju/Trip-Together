import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {ChatStackParams} from '../../../interfaces/router/flashMob/ChatMainStackParams';
import {FlashMobStackParams} from '../../../interfaces/router/flashMob/FlashMobStackParams';
import {BtnText, BtnView, Wrapper} from './ChatMenusStyle';

const ChatMenus = () => {
  // 라우팅
  const {flashmob_id} =
    useRoute<RouteProp<ChatStackParams, 'ChatRoom'>>().params;
  const navigation = useNavigation<NavigationProp<FlashMobStackParams>>();
  const handleToSettlement = () => {
    navigation.navigate('Settlement', {flashmob_id});
  };
  const handleToTranHistory = () => {
    navigation.navigate('TranHistory', {flashmob_id});
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
