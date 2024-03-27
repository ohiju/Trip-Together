import styled from 'styled-components/native';
import {bg_light, bg_main} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_main};
`;

const ProfileView = styled.View`
  flex: 5;
  background: ${bg_light};
  margin-bottom: 15px;
  padding: 10px 15px 10px 15px;
`;

export {ProfileView, Wrapper};
