import styled from 'styled-components/native';
import {
  bg_light,
  bg_lightgray,
  bg_main,
  font_dark,
} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 4;
  background: ${bg_main};
`;

const ProfileBox = styled.View`
  position: relative;
  background: ${bg_light};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding-top: 8px;
`;

const ProfileView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
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
  height: 100%;
  aspect-ratio: 1/1;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const UserInfoView = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const Nickname = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 18px;
`;

const Username = styled.Text`
  font-size: 14px;
`;

const Description = styled.Text`
  width: 100%;
  font-size: 12px;
`;

export {
  Description,
  DragBar,
  Nickname,
  ProfileBox,
  ProfileImage,
  ProfileImageView,
  ProfileView,
  UserInfoView,
  Username,
  Wrapper,
};
