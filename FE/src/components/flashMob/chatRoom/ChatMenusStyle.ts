import styled from 'styled-components/native';
import {bg_light, bg_main, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  height: 294px;
  background: ${bg_main};
  flex-direction: row;
  align-items: flex-start;
`;

const BtnView = styled.TouchableOpacity`
  background: ${bg_light};
  border-radius: 10px;
  padding: 10px 15px;
  margin: 15px;
`;

const BtnText = styled.Text`
  color: ${font_dark};
  font-size: 16px;
`;

export {BtnText, BtnView, Wrapper};
