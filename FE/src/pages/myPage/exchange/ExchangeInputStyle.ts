import styled from 'styled-components/native';
import {bg_light, font_dark, font_lightgray} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TitleText = styled.Text`
  font-weight: 600;
  font-size: 28px;
  color: ${font_dark};
  margin: 0 5px 5px 0;
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

const Exchanged = styled.Text`
  color: ${font_lightgray};
  font-size: 20px;
`;

const Unit = styled.Text`
  color: ${font_dark};
  font-size: 28px;
  margin: 10px;
`;

const UnitKr = styled.Text<{$color: string}>`
  color: ${({$color}) => $color};
  font-size: 20px;
`;

const MessageView = styled.View``;

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
