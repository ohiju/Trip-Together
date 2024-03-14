import styled from 'styled-components/native';
import {bg_light} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 4;
  width: 100%;
  background: ${bg_light};
`;

const AdView = styled.View`
  width: 100%;
  aspect-ratio: 3.6/1;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

const Ad = styled.Image`
  width: 95%;
  height: 95%;
`;

const MenuBox = styled.View`
  flex: 1;
  background: red;
`;

export {Ad, AdView, MenuBox, Wrapper};
