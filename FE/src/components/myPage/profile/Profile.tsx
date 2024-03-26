import React from 'react';
import {customTransition} from '../../../constants/customTransitions';
import parseProfile from '../../../hooks/parseProfile';
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
  const user = useAppSelector((state: RootState) => state.user.user);
  const {image_url, description, nickname, username} = parseProfile(user);

  return (
    <Wrapper
      sharedTransitionTag="profile"
      sharedTransitionStyle={customTransition}>
      <ProfileImageView>
        <ProfileImage source={image_url} resizeMode="contain" />
      </ProfileImageView>
      <UserInfoView>
        <Nickname>{nickname}</Nickname>
        <Username>{username}</Username>
        <Description numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Description>
      </UserInfoView>
    </Wrapper>
  );
};

export default Profile;
