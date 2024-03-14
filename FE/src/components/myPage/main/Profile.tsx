import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {imagePath} from '../../../assets/images/imagePath';
import {imageBaseUrl} from '../../../constants/urls';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Description,
  DragBar,
  Nickname,
  ProfileImage,
  ProfileImageView,
  ProfileView,
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
      <Shadow distance={10} offset={[0, 1]}>
        <ProfileView>
          <DragBar />
          <ProfileImageView>
            <ProfileImage source={image} resizeMode="contain" />
          </ProfileImageView>
          <UserInfoView>
            <Nickname>{nickname}</Nickname>
            <Username>{userInfo.username}</Username>
            <Description numberOfLines={1} ellipsizeMode="tail">
              {description}
            </Description>
          </UserInfoView>
        </ProfileView>
      </Shadow>
    </Wrapper>
  );
};

export default Profile;
