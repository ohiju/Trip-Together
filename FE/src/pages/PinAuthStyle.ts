import styled from 'styled-components/native';
import {bg_light, bg_lightgray, font_dark} from '../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const TitleView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text`
  color: ${font_dark};
  font-size: 24px;
  font-weight: 600;
`;

const PinBox = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 50px 30px 0 30px;
`;

const PinView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 0 10px 0;
  margin: 0 8px;
  border-bottom-width: 5px;
  border-color: ${bg_lightgray};
`;

const Pin = styled.View<{$token: boolean}>`
  width: 15px;
  height: 15px;
  border-radius: 100px;
  background: ${({$token}) => ($token ? 'black' : 'transparent')};
`;

export {Pin, PinBox, PinView, TitleText, TitleView, Wrapper};
