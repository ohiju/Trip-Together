import styled from 'styled-components/native';
import {bg_light, bg_main} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_main};
`;

const Terms = styled.View`
  flex: 2;
  background: ${bg_light};
  padding: 5px 15px;
`;

export {Terms, Wrapper};
