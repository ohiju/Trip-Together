import styled from 'styled-components/native';
import {bg_light, font_dark, font_lightgray} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const TitleView = styled.View`
  width: 100%;
  margin: 20px 0 10px 10px;
`;

const Title = styled.Text`
  font-size: 28px;
  color: ${font_dark};
`;

const SloganView = styled.View`
  width: 100%;
  margin: 0 0 10px 10px;
`;

const Slogan = styled.Text`
  color: ${font_lightgray};
`;

const IconView = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

const TermView = styled.View`
  flex-direction: row;
  margin: 20px 10px;
`;

const Term = styled.Text`
  flex: 1;
  font-size: 16px;
`;

export {
  IconView,
  Slogan,
  SloganView,
  Term,
  TermView,
  Title,
  TitleView,
  Wrapper,
};
