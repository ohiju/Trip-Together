import styled from 'styled-components/native';
import {bg_lightgray, bg_light, font_light} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${bg_light};
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const TitleInput = styled.TextInput`
  background-color: ${bg_lightgray};
  width: 80%;
  padding: 1px 15px;
  height: 40px;
  margin-top: 200px;
  border-radius: 20px;
  color: ${font_light};
`;

export {Wrapper, TitleInput};
