import React, {useState} from 'react';
import {
  ChatHeader,
  HeaderBox,
  HeaderHighlight,
  HeaderNone,
  HeaderText,
  Wrapper,
} from './ChatMainStyle';
import Chats from '../../components/flashMob/Chats';
import {useFocusEffect} from '@react-navigation/native';
import {setDisplay} from '../../store/slices/tabState';
import {useAppDispatch} from '../../store/hooks';

const ChatMain = () => {
  const [onChat, setOnChat] = useState(true);
  const dispatch = useAppDispatch();

  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

  const handleOnPress = (direction: string) => {
    if (direction === 'left') {
      setOnChat(true);
    } else if (direction === 'right') {
      setOnChat(false);
    }
  };

  return (
    <Wrapper>
      <ChatHeader>
        <HeaderBox onPress={() => handleOnPress('left')}>
          <HeaderText>참여 중</HeaderText>
          {onChat ? <HeaderHighlight /> : <HeaderNone />}
        </HeaderBox>
        <HeaderBox onPress={() => handleOnPress('right')}>
          <HeaderText>대기 중</HeaderText>
          {!onChat ? <HeaderHighlight /> : <HeaderNone />}
        </HeaderBox>
      </ChatHeader>
      <Chats />
    </Wrapper>
  );
};

export default ChatMain;
