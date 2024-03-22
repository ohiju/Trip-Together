import styled from 'styled-components/native';
import {bg_light, bg_lightgray, font_dark} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 0.2;
  width: 100%;
  justify-content: start;
`;

const ProfileView = styled.View`
  position: relative;
  flex: 1;
  width: 100%;
  flex-direction: row;
  background: ${bg_light};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  align-items: center;
  padding-top: 8px;
`;

const DragBar = styled.View`
  position: absolute;
  top: 8px;
  left: 35%;
  width: 30%;
  border: 2px solid ${bg_lightgray};
  border-radius: 5px;
`;

const ProfileImageView = styled.View`
  width: 25%;
  aspect-ratio: 1/1;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

const UserInfoView = styled.View`
  width: 75%;
`;

const Nickname = styled.Text`
  color: ${font_dark};
  font-weight: 600;
`;

const Username = styled.Text`
  font-size: 12px;
`;

const Description = styled.Text`
  width: 100%;
  font-size: 12px;
`;

export {
  Description,
  DragBar,
  Nickname,
  ProfileImage,
  ProfileImageView,
  ProfileView,
  UserInfoView,
  Username,
  Wrapper,
};
