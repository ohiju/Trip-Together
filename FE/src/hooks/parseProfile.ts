import {IMAGE_BASE_URL} from '@env';
import {imagePath} from '../assets/images/imagePath';

interface Profile {
  image_url?: string;
  description?: string;
  nickname?: string;
  username?: string;
  birth?: string;
  gender?: 'FEMALE' | 'MALE';
  created_at?: string;
}

const parseProfile = (profile: Profile) => {
  const image_url = profile.image_url
    ? {uri: `${IMAGE_BASE_URL}/${profile.image_url}`}
    : imagePath.profiledefault;
  const description = profile.description
    ? profile.description
    : '자기소개를 입력하고 마음에 맞는 동행을 구해보세요!';
  const nickname = profile.nickname ? profile.nickname : profile.username;
  const username = profile.username ? profile.username : 'default';
  const birth = profile.birth
    ? new Date(profile.birth).toLocaleDateString('ko-KR')
    : 'default';
  const gender = profile.gender === 'FEMALE' ? '여성' : '남성';
  const created_at = profile.created_at
    ? new Date(profile.created_at).toLocaleDateString('ko-KR')
    : 'default';

  return {
    image_url,
    description,
    nickname,
    username,
    birth,
    gender,
    created_at,
  };
};

export default parseProfile;
