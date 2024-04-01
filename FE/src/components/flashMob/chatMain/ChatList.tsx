import React from 'react';
import {flashmob} from '../../../interfaces/states/ChatState';
import Chat from './Chat';
import {Wrapper} from './ChatListStyle';

interface ChatListProps {
  chats: flashmob[];
}

const ChatList = ({chats}: ChatListProps) => {
  return (
    <Wrapper>
      {chats.map(chat => (
        <Chat key={chat.flashmob_id} chat={chat} />
      ))}
    </Wrapper>
  );
};

export default ChatList;
