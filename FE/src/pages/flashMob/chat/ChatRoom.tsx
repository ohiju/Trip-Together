import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import useGetFlashmobMembers, {
  GetFlashmobMembersParams,
} from '../../../apis/flashMob/useGetFlashmobMembers';
import ChatInput from '../../../components/flashMob/chatRoom/ChatInput';
import ChatMenus from '../../../components/flashMob/chatRoom/ChatMenus';
import GroupedMessages from '../../../components/flashMob/chatRoom/GroupedMessages';
import {ChatStackParams} from '../../../interfaces/router/flashMob/ChatMainStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Wrapper} from './ChatRoomStyle';

const ChatRoom = () => {
  const [opened, setOpened] = useState(false);
  const messages = useAppSelector((state: RootState) => state.chat.messages);

  // AsyncStorage Message 조회, Room Socket 연결,

  // API 번개 채팅 참여자 조회
  const {flashmob_id} =
    useRoute<RouteProp<ChatStackParams, 'ChatRoom'>>().params;
  const getFlashmobMembers = useGetFlashmobMembers();
  useEffect(() => {
    const params: GetFlashmobMembersParams = {
      flashmob_id,
    };
    getFlashmobMembers(params);
  }, []);

  return (
    <Wrapper>
      <GroupedMessages messages={messages} />
      <ChatInput opened={opened} setOpened={setOpened} />
      {opened ? <ChatMenus /> : null}
    </Wrapper>
  );
};

export default ChatRoom;
