import {IMAGE_BASE_URL} from '@env';
import {imagePath} from '../assets/images/imagePath';
import {flashmob} from '../interfaces/states/ChatState';

const parseChat = (chat: flashmob) => {
  const image_url = chat.master_image_url
    ? {uri: `${IMAGE_BASE_URL}/${chat.master_image_url}`}
    : imagePath.profiledefault;
  const title = chat.flashmob_title;
  const placeTime = `${chat.attraction_name} / ${new Date(
    chat.flashmob_start_at,
  ).toLocaleString('ko-KR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })}`;
  const members = chat.flashmob_current_count + '/' + chat.flashmob_max_count;
  const btnText =
    chat.status === 'ATTEND'
      ? '나가기'
      : chat.status === 'WAIT'
      ? '취소'
      : '확인';

  return {image_url, title, placeTime, members, btnText};
};

export default parseChat;
