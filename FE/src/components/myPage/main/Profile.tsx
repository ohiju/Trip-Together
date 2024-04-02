import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import parseProfile from '../../../hooks/parseProfile';
import useSwipeTop from '../../../hooks/useSwipeTop';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {ProfileMainProps} from '../../../interfaces/router/myPage/ProfileStackParams';
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
    const props: ProfileMainProps = {
      member_id: user.member_id,
    };
    navigation.navigate('ProfileMain', props);
  };
  const {onTouchStart, onTouchEnd} = useSwipeTop(onSwipeTop);

  return (
    <Wrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <StyledShadow offset={[0, 1]}>
        <DragBar />
        <ProfileBox>
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
