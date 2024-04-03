import styled from 'styled-components/native';
import {
  font_dark,
  font_light,
  primary,
  secondary,
} from '../../../constants/colors';

const Wrapper = styled.View<{$isMe: boolean}>`
  margin: 5px 5px 10px 5px;
  flex-direction: row;
  justify-content: ${({$isMe}) => ($isMe ? 'flex-end' : 'flex-start')};
`;

const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const MessageView = styled.View`
  max-width: 80%;
`;

const Nickname = styled.Text<{$isMe: boolean}>`
  color: ${font_dark};
  font-weight: 900;
  align-self: ${({$isMe}) => ($isMe ? 'flex-end' : 'flex-start')};
  margin: 0 5px;
`;

const ContentBox = styled.View`
  justify-content: flex-start;
`;

const ContentView = styled.View<{$isMe: boolean}>`
  background: ${({$isMe}) => ($isMe ? primary : secondary)};
  padding: 8px 15px;
  border-radius: 10px;
  margin-top: 3px;
  margin-left: 5px;
  align-self: ${({$isMe}) => ($isMe ? 'flex-end' : 'flex-start')};
`;

const Content = styled.Text`
  color: ${font_light};
  font-weight: 500;
  font-size: 15px;
`;

const Time = styled.Text<{$isMe: boolean}>`
  margin: 0 5px;
  font-size: 12px;
  align-self: ${({$isMe}) => ($isMe ? 'flex-start' : 'flex-end')};
`;

export {
  Content,
  ContentBox,
  ContentView,
  MessageView,
  Nickname,
  ProfileImg,
  Time,
  Wrapper,
};
