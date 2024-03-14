import React from 'react';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Description,
  Nickname,
  ProfileImage,
  ProfileImageView,
  ProfileView,
  Shadow,
  UserInfoView,
  Username,
  Wrapper,
} from './ProfileStyle';

const Profile = () => {
  const userInfo = useAppSelector((state: RootState) => state.user.userInfo);

  return (
    <Wrapper>
      <Shadow />
      <ProfileView>
        <ProfileImageView>
          <ProfileImage
            source={{uri: userInfo.image_url}}
            resizeMode="contain"
          />
        </ProfileImageView>
        <UserInfoView>
          <Nickname>{userInfo.nickname}</Nickname>
          <Username>{userInfo.username}</Username>
          <Description numberOfLines={1} ellipsizeMode="tail">
            {userInfo.description}
          </Description>
        </UserInfoView>
      </ProfileView>
    </Wrapper>
  );
};

export default Profile;
