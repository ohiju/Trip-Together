import styled from 'styled-components/native';
import {bg_main} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_main};
  align-items: center;
  justify-content: start;
`;

const StyledText = styled.Text`
  font-size: 50px;
`;

export {StyledText, Wrapper};
