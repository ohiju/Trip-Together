import {IMAGE_BASE_URL} from '@env';
import {imagePath} from '../assets/images/imagePath';
import {message as messageType} from '../interfaces/states/ChatState';

const parseMessages = (messages: messageType[]) => {
  const sender_id = messages[0].sender_id;
  const sender_nickname = messages[0].sender_nickname;
  const sender_image_url = messages[0].sender_image_url
    ? {uri: `${IMAGE_BASE_URL}/${messages[0].sender_image_url}`}
    : imagePath.profiledefault;
  const contents = messages.map(message => message.content);
  const created_at = new Date(
    messages[messages.length - 1].created_at,
  ).toLocaleString('ko-KR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return {sender_id, sender_image_url, sender_nickname, contents, created_at};
};

export default parseMessages;
