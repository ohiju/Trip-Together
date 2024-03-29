import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {FlashMainStackParams} from '../../interfaces/router/flashMob/FlashMainStackParams';

const Button = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
`;

const ChatImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const ToChat = () => {
  const navigation = useNavigation<NavigationProp<FlashMainStackParams>>();

  const handlePressButton = () => {
    navigation.navigate('chat_main');
  };

  return (
    <Button onPress={handlePressButton}>
      <ChatImage source={require('../../assets/images/chat.png')} />
    </Button>
  );
};

export default ToChat;
