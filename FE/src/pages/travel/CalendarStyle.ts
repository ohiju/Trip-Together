import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${bg_light};
`;

const TitleView = styled.View`
  padding: 20px 15px;
`;

const Title = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 28px;
`;

export {Title, TitleView, Wrapper};
