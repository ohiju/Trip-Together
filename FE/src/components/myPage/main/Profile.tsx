import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {imageBaseUrl} from '../../../constants/urls';
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
  const userInfo = useAppSelector((state: RootState) => state.user.userInfo);
  const image = userInfo.image_url
    ? {uri: `${imageBaseUrl}${userInfo.image_url}`}
    : imagePath.basicProfile;
  const description = userInfo.description
    ? userInfo.description
    : '자기소개를 입력하고 마음에 맞는 동행을 구해보세요!';
  const nickname = userInfo.nickname ? userInfo.nickname : userInfo.username;

  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const onSwipeTop = () => {
    navigation.navigate('ProfileMain');
  };
  const {onTouchStart, onTouchEnd} = useSwipeTop(onSwipeTop);

  return (
    <Wrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <StyledShadow offset={[0, 1]}>
        <ProfileBox>
          <DragBar />
          <ProfileView>
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
        </ProfileBox>
      </StyledShadow>
    </Wrapper>
  );
};

export default Profile;
