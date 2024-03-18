import styled from 'styled-components/native';
import {font_dark, font_lightgray, primary} from '../../constants/colors';

const TitleView = styled.View`
  width: 100%;
  margin: 30px 0 10px 10px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 28px;
  color: ${font_dark};
`;

const Hightlight = styled.Text`
  color: ${primary};
`;

const SloganView = styled.View`
  width: 100%;
  margin: 0 0 10px 10px;
`;

const Slogan = styled.Text`
  color: ${font_lightgray};
`;

const Body = styled.View`
  width: 100%;
  flex: 1;
`;

export {Body, Hightlight, Slogan, SloganView, Title, TitleView};
