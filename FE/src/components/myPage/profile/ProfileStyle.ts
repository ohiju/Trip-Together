import styled from 'styled-components/native';
import {bg_danger, font_danger, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileImageView = styled.View`
  height: 80px;
  aspect-ratio: 1/1;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 200px;
`;

const UserInfoView = styled.View`
  flex: 1;
  margin-left: 15px;
`;

const UserInfoTopView = styled.View`
  flex-direction: row;
`;

const NameView = styled.View`
  flex: 1;
`;

const Nickname = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 18px;
`;

const Username = styled.Text`
  font-size: 14px;
`;

const LogoutView = styled.View``;

const LogoutBtn = styled.Pressable`
  border-width: 1px;
  border-radius: 10px;
  border-color: ${bg_danger};
  padding: 5px 10px;
`;

const LogoutBtnText = styled.Text`
  color: ${font_danger};
  font-weight: 600;
`;

const Description = styled.Text`
  width: 100%;
  font-size: 14px;
`;

export {
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
};
