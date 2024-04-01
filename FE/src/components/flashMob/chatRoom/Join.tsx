import React from 'react';
import {message as messageType} from '../../../interfaces/states/ChatState';
import {Hr, Message, Wrapper} from './JoinStytle';

interface JoinProps {
  message: messageType;
}

const Join = ({message}: JoinProps) => {
  return (
    <Wrapper>
      <Hr />
      <Message>{message.sender_nickname} 님이 입장하셨습니다.</Message>
      <Hr />
    </Wrapper>
  );
};

export default Join;
