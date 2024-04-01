import styled from 'styled-components/native';
import {
  bg_light,
  bg_lightgray,
  bg_main,
  font_dark,
  font_light,
  secondary,
} from '../../../constants/colors';

const Wrapper = styled.ScrollView`
  flex: 1;
  background: ${bg_light};
  padding: 20px 0;
`;

const CardView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin: 0 15px 20px 15px;
  border-width: 1px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-color: ${bg_main};
  border-radius: 10px;
`;

const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const NicknameView = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const Nickname = styled.Text`
  color: ${font_dark};
  font-size: 18px;
  font-weight: 600;
`;

const Ammount = styled.Text``;

const StatusView = styled.Pressable<{$hasSent: boolean}>`
  width: 25%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 0;
  background: ${({$hasSent}) => ($hasSent ? bg_lightgray : secondary)};
`;

const StatusText = styled.Text`
  color: ${font_light};
`;

export {
  Ammount,
  CardView,
  Nickname,
  NicknameView,
  ProfileImg,
  StatusText,
  StatusView,
  Wrapper,
};
