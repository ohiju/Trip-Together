import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {customTransition} from '../../../constants/customTransitions';
import parseProfile from '../../../hooks/parseProfile';
import useSwipeTop from '../../../hooks/useSwipeTop';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Description,
  DragBar,
  Nickname,
  ProfileBox,
  ProfileImage,
  ProfileImageView,
  ProfileView,
  StyledShadow,
  UserInfoView,
  Username,
  Wrapper,
} from './ProfileStyle';

const Profile = () => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const {image_url, description, nickname, username} = parseProfile(user);

  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const onSwipeTop = () => {
    navigation.navigate('ProfileMain');
  };
  const {onTouchStart, onTouchEnd} = useSwipeTop(onSwipeTop);

  return (
    <Wrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <StyledShadow offset={[0, 1]}>
        <DragBar />
        <ProfileBox
          sharedTransitionTag="profile"
          sharedTransitionStyle={customTransition}>
          <ProfileView>
            <ProfileImageView>
              <ProfileImage source={image_url} resizeMode="contain" />
            </ProfileImageView>
            <UserInfoView>
              <Nickname>{nickname}</Nickname>
              <Username>{username}</Username>
              <Description numberOfLines={1} ellipsizeMode="tail">
                {description}
              </Description>
            </UserInfoView>
          </ProfileView>
        </ProfileBox>
      </StyledShadow>
    </Wrapper>
  );
};

export default Profile;
