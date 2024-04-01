import styled from 'styled-components/native';
import {
  font_dark,
  font_light,
  primary,
  secondary,
} from '../../../constants/colors';

const Wrapper = styled.View<{$isMe: boolean}>`
  margin: 5px 5px 10px 5px;
  align-items: ${({$isMe}) => ($isMe ? 'flex-end' : 'flex-start')};
`;

const MessageView = styled.View``;

const Nickname = styled.Text<{$isMe: boolean}>`
  color: ${font_dark};
  font-weight: 900;
  align-self: ${({$isMe}) => ($isMe ? 'flex-end' : 'flex-start')};
`;

const ContentView = styled.View<{$isMe: boolean}>`
  max-width: 80%;
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

export {Content, ContentView, MessageView, Nickname, Time, Wrapper};
