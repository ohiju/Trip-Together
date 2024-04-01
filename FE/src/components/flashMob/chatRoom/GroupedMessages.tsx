import React from 'react';
import groupByStatusAndSender from '../../../hooks/groupByStatusAndSender';
import {message as messageType} from '../../../interfaces/states/ChatState';
import Attent from './Attend';
import {Wrapper} from './GroupedMessagesStyle';
import Join from './Join';
import Messages from './Messages';
import Settlement from './Settlement';

interface GroupedMessagesProps {
  messages: messageType[];
}

const GroupedMessages = ({messages}: GroupedMessagesProps) => {
  const groupedMessages = groupByStatusAndSender(messages);

  return (
    <Wrapper>
      {groupedMessages.map((group, idx) => {
        if (group[0] === 'MESSAGE') {
          return <Messages key={idx} messages={group[1]} />;
        } else if (group[0] === 'ATTEND') {
          return <Attent key={idx} message={group[1][0]} />;
        } else if (group[0] === 'JOIN') {
          return <Join key={idx} message={group[1][0]} />;
        } else if (group[0] === 'SETTLEMENT') {
          return <Settlement key={idx} message={group[1][0]} />;
        }
      })}
    </Wrapper>
  );
};

export default GroupedMessages;
