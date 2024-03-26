import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {font_dark} from '../../../constants/colors';

const Wrapper = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileImageView = styled.View`
  height: 80px; // 100%;
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
  font-size: 14px;
`;

export {
  Description,
  Nickname,
  ProfileImage,
  ProfileImageView,
  UserInfoView,
  Username,
  Wrapper,
};
