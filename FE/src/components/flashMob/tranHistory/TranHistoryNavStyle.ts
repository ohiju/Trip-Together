import styled from 'styled-components/native';
import {
  bg_light,
  bg_lightgray,
  font_dark,
  primary,
} from '../../../constants/colors';

const Wrapper = styled.View`
  background: ${bg_light};
  flex-direction: row;
`;

const NavView = styled.Pressable`
  position: relative;
  flex: 1;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-color: ${bg_lightgray};
  border-width: 1px;
`;

const NavHighlight = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7px;
  background: ${primary};
`;

const NavText = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 22px;
`;

export {NavHighlight, NavText, NavView, Wrapper};
