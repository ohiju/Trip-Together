import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {imageBaseUrl} from '../../../constants/urls';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Description,
  Nickname,
  ProfileImage,
  ProfileImageView,
  UserInfoView,
  Username,
  Wrapper,
} from './ProfileStyle';

const Profile = () => {
  const userInfo = useAppSelector((state: RootState) => state.user.userInfo);
  const image = userInfo.image_url
    ? {uri: `${imageBaseUrl}${userInfo.image_url}`}
    : imagePath.basicProfile;
  const description = userInfo.description
    ? userInfo.description
    : '자기소개를 입력하고 마음에 맞는 동행을 구해보세요!';
  const nickname = userInfo.nickname ? userInfo.nickname : userInfo.username;

  return (
    <Wrapper>
      <ProfileImageView>
        <ProfileImage source={image} resizeMode="contain" />
      </ProfileImageView>
      <UserInfoView>
        <Nickname>{nickname}</Nickname>
        <Username>{userInfo.username}</Username>
        <Description numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Description>
      </UserInfoView>
    </Wrapper>
  );
};

export default Profile;
