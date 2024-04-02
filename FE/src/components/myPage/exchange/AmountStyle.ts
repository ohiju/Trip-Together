import styled from 'styled-components/native';
import {font_dark, font_lightgray} from '../../../constants/colors';

const Wrapper = styled.View`
  margin: 20px 15px;
`;

const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TitleText = styled.Text`
  font-weight: 600;
  font-size: 26px;
  color: ${font_dark};
  margin: 0 5px 3px 0;
`;

const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
`;

const Input = styled.TextInput`
  color: ${font_dark};
  font-size: 20px;
`;

const Unit = styled.Text`
  color: #000;
  font-size: 24px;
  margin: 5px 10px;
`;

const Exchanged = styled.Text`
  color: ${font_lightgray};
  font-size: 20px;
`;

const UnitKr = styled.Text<{$color: string}>`
  color: ${({$color}) => $color};
  font-size: 20px;
`;

const MessageView = styled.View`
  margin-top: 3px;
`;

const Message = styled.Text``;

export {
  Exchanged,
  Input,
  InputView,
  Message,
  MessageView,
  TitleText,
  TitleView,
  Unit,
  UnitKr,
  Wrapper,
};
