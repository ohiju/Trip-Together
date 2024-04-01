import styled from 'styled-components/native';
import {bg_main} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  background: ${bg_main};
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 18px;
`;

export {LoadingText, Wrapper};
