import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {imagePath} from '../../assets/images/imagePath';
import {ChatStackParams} from '../../interfaces/router/flashMob/ChatMainStackParams';

const Wrapper = styled(TouchableOpacity)`
  height: 100px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Image = styled.Image`
  width: 55px;
  height: 55px;
`;

const ChatInfo = styled.View`
  width: 65%;
`;

const ChatHost = styled.Text`
  font-size: 15px;
  font-weight: 900;
`;

const ChatTitle = styled.Text`
  font-weight: 600;
  color: green;
`;

const ChatMember = styled.Text``;

const InChat = ({item}: any) => {
  const navigation = useNavigation<NavigationProp<ChatStackParams>>();

  const handlePressChat = () => {
    navigation.navigate('chatroom');
  };

  return (
    <Wrapper onPress={handlePressChat}>
      <Image source={imagePath.profiledefault} />
      <ChatInfo>
        <ChatHost>Daniel</ChatHost>
        <ChatTitle>{item.title}</ChatTitle>
        <Text>ㅋㅋ</Text>
      </ChatInfo>
      <ChatMember>
        {item.users}/{item.max_users}
      </ChatMember>
    </Wrapper>
  );
};

export default InChat;
