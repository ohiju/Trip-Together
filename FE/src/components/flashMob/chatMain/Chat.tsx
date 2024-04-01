import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import useDeleteFlashMob from '../../../apis/flashMob/useDeleteFlashMob';
import useDeleteWait from '../../../apis/flashMob/useDeleteWait';
import usePatchWait from '../../../apis/flashMob/usePatchWait';
import parseChat from '../../../hooks/parseChat';
import {ChatStackParams} from '../../../interfaces/router/flashMob/ChatMainStackParams';
import {flashmob} from '../../../interfaces/states/ChatState';
import {
  Btn,
  BtnText,
  ChatInfo,
  ChatLeftView,
  ChatMember,
  ChatPlaceTime,
  ChatRightView,
  ChatTitle,
  Image,
  Wrapper,
} from './ChatStyle';

interface ChatProps {
  chat: flashmob;
}

const Chat = ({chat}: ChatProps) => {
  const {flashmob_id} = chat;
  const {image_url, title, placeTime, members, btnText} = parseChat(chat);

  // API
  const deleteFlashMob = useDeleteFlashMob();
  const deleteWait = useDeleteWait();
  const patchWait = usePatchWait();
  const handleBtnPress = () => {
    if (chat.status === 'ATTEND') {
      deleteFlashMob({flashmob_id});
    } else if (chat.status === 'WAIT') {
      deleteWait({flashmob_id});
    } else if (chat.status === 'REFUSE_UNCHECK') {
      patchWait({flashmob_id});
    }
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<ChatStackParams>>();
  const handlePressChat = () => {
    if (chat.status === 'ATTEND') {
      navigation.navigate('ChatRoom', {flashmob_id});
    }
  };

  return (
    <Wrapper>
      <ChatLeftView onPress={handlePressChat}>
        <Image source={image_url} />
        <ChatInfo>
          <ChatTitle>{title}</ChatTitle>
          <ChatPlaceTime>{placeTime}</ChatPlaceTime>
        </ChatInfo>
      </ChatLeftView>
      <ChatRightView>
        <ChatMember>{members}</ChatMember>
        <Btn onPress={handleBtnPress} $status={chat.status}>
          <BtnText>{btnText}</BtnText>
        </Btn>
      </ChatRightView>
    </Wrapper>
  );
};

export default Chat;
