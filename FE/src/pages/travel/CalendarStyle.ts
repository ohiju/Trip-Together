import styled from 'styled-components/native';
import {bg_light, primary, font_light} from '../../constants/colors';
import {TouchableOpacity} from 'react-native';

const Wrapper = styled.View`
  background-color: ${bg_light};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  background-color: ${primary};
  justify-content: center;
  align-items: center;
`;

const NextButtonText = styled.Text`
  color: ${font_light};
`;

export {Wrapper, NextButton, NextButtonText};
