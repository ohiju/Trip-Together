import styled from 'styled-components/native';
import {bg_light, bg_main, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  position: relative;
  flex: 4;
  width: 100%;
  background: ${bg_main};
  justify-content: start;
`;

const Shadow = styled.View`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 10px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  background: black;
  opacity: 0.5;
  filter: blur(100);
`;

const ProfileView = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  background: ${bg_light};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 15px;
  align-items: center;
`;

const ProfileImageView = styled.View`
  height: 100%;
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
  Nickname,
  ProfileImage,
  ProfileImageView,
  ProfileView,
  Shadow,
  UserInfoView,
  Username,
  Wrapper,
};
