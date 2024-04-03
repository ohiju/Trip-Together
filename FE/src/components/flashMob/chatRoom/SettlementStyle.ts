import styled from 'styled-components/native';
import {bg_main, font_dark, font_light} from '../../../constants/colors';

const Wrapper = styled.View<{$isMe: boolean}>`
  align-items: ${({$isMe}) => ($isMe ? 'flex-end' : 'flex-start')};
  margin: 5px 0 10px 0;
`;

const Card = styled.View`
  width: 75%;
  border-radius: 10px;
  overflow: hidden;
  border-width: 1px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-color: ${bg_main};
`;

const Image = styled.Image`
  width: 100%;
  height: 170px;
`;

const ProfileView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 5px 0 8px;
  margin: 10px 0;
`;

const ProfileImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

const ContentView = styled.View`
  flex: 1;
  margin-left: 5px;
`;

const Nickname = styled.Text`
  color: ${font_dark};
  font-weight: 600;
`;

const Content = styled.Text``;

const BtnView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
`;

const Btn = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin: 0 3px 0 3px;
  border-radius: 15px;
`;

const BtnText = styled.Text`
  color: ${font_light};
  font-size: 15px;
`;

export {
  Btn,
  BtnText,
  BtnView,
  Card,
  Content,
  ContentView,
  Image,
  Nickname,
  ProfileImg,
  ProfileView,
  Wrapper,
};
