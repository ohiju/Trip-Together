import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import useLogout from '../../../apis/member/useLogout';
import {bg_light, bg_main} from '../../../constants/colors';
import parseProfile from '../../../hooks/parseProfile';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Description,
  LogoutBtn,
  LogoutBtnText,
  LogoutView,
  NameView,
  Nickname,
  ProfileImage,
  ProfileImageView,
  UserInfoTopView,
  UserInfoView,
  Username,
  Wrapper,
} from './ProfileStyle';

const Profile = () => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const {image_url, description, nickname, username} = parseProfile(user);
  const {member_id} =
    useRoute<RouteProp<MyPageStackParams, 'ProfileMain'>>().params;

  // API 로그아웃
  const logout = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <Wrapper>
      <ProfileImageView>
        <ProfileImage source={image_url} resizeMode="contain" />
      </ProfileImageView>
      <UserInfoView>
        <UserInfoTopView>
          <NameView>
            <Nickname>{nickname}</Nickname>
            <Username>{username}</Username>
          </NameView>
          {user.member_id === member_id ? (
            <LogoutView>
              <LogoutBtn
                onPress={handleLogout}
                style={({pressed}) => ({
                  backgroundColor: pressed ? bg_main : bg_light,
                })}>
                <LogoutBtnText>로그아웃</LogoutBtnText>
              </LogoutBtn>
            </LogoutView>
          ) : null}
        </UserInfoTopView>
        <Description numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Description>
      </UserInfoView>
    </Wrapper>
  );
};

export default Profile;
