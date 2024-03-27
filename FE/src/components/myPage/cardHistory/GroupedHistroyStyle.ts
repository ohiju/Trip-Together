import styled from 'styled-components/native';
import {bg_main} from '../../../constants/colors';

const Wrapper = styled.View`
  margin-top: 15px;
`;

const DateView = styled.View`
  background: ${bg_main};
`;

const DateText = styled.Text`
  margin: 3px 15px;
`;

export {DateText, DateView, Wrapper};
