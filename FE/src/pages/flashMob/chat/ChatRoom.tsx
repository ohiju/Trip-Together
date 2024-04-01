import React, {useState} from 'react';
import ChatInput from '../../../components/flashMob/chatRoom/ChatInput';
import ChatMenus from '../../../components/flashMob/chatRoom/ChatMenus';
import GroupedMessages from '../../../components/flashMob/chatRoom/GroupedMessages';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Wrapper} from './ChatRoomStyle';

const ChatRoom = () => {
  const [opened, setOpened] = useState(false);
  const messages = useAppSelector((state: RootState) => state.chat.messages);

  // AsyncStorage Message 조회

  return (
    <Wrapper>
      <GroupedMessages messages={messages} />
      <ChatInput opened={opened} setOpened={setOpened} />
      {opened ? <ChatMenus /> : null}
    </Wrapper>
  );
};

export default ChatRoom;
