import {message as messageType} from '../interfaces/states/ChatState';

const parseMessages = (messages: messageType[]) => {
  const sender_id = messages[0].sender_id;
  const sender_nickname = messages[0].sender_nickname;
  const contents = messages.map(message => message.content);
  const created_at = messages[messages.length - 1].created_at.toLocaleString(
    'ko-KR',
    {hour: 'numeric', minute: 'numeric', hour12: true},
  );

  return {sender_id, sender_nickname, contents, created_at};
};

export default parseMessages;
