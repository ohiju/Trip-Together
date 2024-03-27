import {IMAGE_BASE_URL} from '@env';
import {imagePath} from '../assets/images/imagePath';

interface Profile {
  image_url: string;
  description: string;
  nickname: string;
  username: string;
}

const parseProfile = (profile: Profile) => {
  const image_url = profile.image_url
    ? {uri: `${IMAGE_BASE_URL}/${profile.image_url}`}
    : imagePath.basicProfile;
  const description = profile.description
    ? profile.description
    : '자기소개를 입력하고 마음에 맞는 동행을 구해보세요!';
  const nickname = profile.nickname ? profile.nickname : profile.username;
  const username = profile.username;

  return {image_url, description, nickname, username};
};

export default parseProfile;
