import React from 'react';
import parseMessages from '../../../hooks/parseMessages';
import {message as messageType} from '../../../interfaces/states/ChatState';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Content,
  ContentView,
  MessageView,
  Nickname,
  Time,
  Wrapper,
} from './MessagesStyle';

interface MessageProps {
  messages: messageType[];
}

const Messages = ({messages}: MessageProps) => {
  const {sender_id, sender_nickname, contents, created_at} =
    parseMessages(messages);
  const {member_id} = useAppSelector((state: RootState) => state.user.user);

  return (
    <Wrapper $isMe={sender_id === member_id}>
      <MessageView>
        <Nickname $isMe={sender_id === member_id}>{sender_nickname}</Nickname>
        {contents.map((content, idx) => (
          <ContentView key={idx} $isMe={sender_id === member_id}>
            <Content>{content}</Content>
          </ContentView>
        ))}
        <Time $isMe={sender_id === member_id}>{created_at}</Time>
      </MessageView>
    </Wrapper>
  );
};

export default Messages;
