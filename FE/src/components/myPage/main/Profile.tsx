import React from 'react';
import {Shadow} from 'react-native-shadow-2';
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

  return (
    <Wrapper>
      <Shadow distance={10} offset={[0, 1]}>
        <ProfileView>
          <DragBar />
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
      </Shadow>
    </Wrapper>
  );
};

export default Profile;
