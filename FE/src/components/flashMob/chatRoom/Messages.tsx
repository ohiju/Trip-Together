import React from 'react';
import parseMessages from '../../../hooks/parseMessages';
import {message as messageType} from '../../../interfaces/states/ChatState';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Content,
  ContentBox,
  ContentView,
  MessageView,
  Nickname,
  ProfileImg,
  Time,
  Wrapper,
} from './MessagesStyle';

interface MessageProps {
  messages: messageType[];
}

const Messages = ({messages}: MessageProps) => {
  const {sender_id, sender_nickname, sender_image_url, contents, created_at} =
    parseMessages(messages);
  const {member_id} = useAppSelector((state: RootState) => state.user.user);

  return (
    <Wrapper $isMe={sender_id === member_id}>
      {sender_id !== member_id ? (
        <ProfileImg source={sender_image_url} resizeMode="cover" />
      ) : null}
      <MessageView>
        <Nickname $isMe={sender_id === member_id}>{sender_nickname}</Nickname>
        <ContentBox>
          {contents.map((content, idx) => (
            <ContentView key={idx} $isMe={sender_id === member_id}>
              <Content>{content}</Content>
            </ContentView>
          ))}
          <Time $isMe={sender_id === member_id}>{created_at}</Time>
        </ContentBox>
      </MessageView>
    </Wrapper>
  );
};

export default Messages;
