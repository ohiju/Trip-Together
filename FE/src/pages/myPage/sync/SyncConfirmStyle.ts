import styled from 'styled-components/native';
import {bg_light, font_danger, font_lightgray} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const InputView = styled.View`
  align-self: center;
  flex-direction: row;
  align-items: center;
  width: 90%;
  background: transparent;
  border-bottom-width: 1px;
  padding-left: 5px;
  margin-top: 20px;
`;

const Input = styled.TextInput`
  flex: 1;
  margin-left: 5px;
`;

const MessageView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 15px;
`;

const Message = styled.Text`
  color: ${font_danger};
  margin-left: 2px;
  margin-bottom: 2px;
`;

const AgainBtnView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const AgainBtn = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

const AgainText = styled.Text`
  color: ${font_lightgray};
  font-size: 16px;
  margin-bottom: 2px;
`;

export {
  AgainBtn,
  AgainBtnView,
  AgainText,
  Input,
  InputView,
  Message,
  MessageView,
  Wrapper,
};
