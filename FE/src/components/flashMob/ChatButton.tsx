import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {imagePath} from '../../assets/images/imagePath';
import {FlashMobStackParams} from '../../interfaces/router/flashMob/FlashMobStackParams';
import {ChatImage, ChatText, Wrapper} from './ChatButtonStyle';

const ToChat = () => {
  const navigation = useNavigation<NavigationProp<FlashMobStackParams>>();

  const handlePressButton = () => {
    navigation.navigate('ChatMain');
  };

  return (
    <Wrapper onPress={handlePressButton}>
      <ChatImage source={imagePath.chat} resizeMode="cover" />
      <ChatText>채팅하기</ChatText>
    </Wrapper>
  );
};

export default ToChat;
