import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 3;
  background: ${bg_light};
  margin-bottom: 15px;
  padding: 20px 15px;
`;

const TitleView = styled.View``;

const TitleText = styled.Text`
  color: ${font_dark};
  font-size: 28px;
  font-weight: 600;
`;

const RateView = styled.View`
  margin-top: 5px;
`;

const RateText = styled.Text``;

const AmountView = styled.View`
  flex: 1;
  justify-content: center;
`;

const AmountText = styled.Text`
  font-size: 26px;
  font-weight: 600;
`;

export {
  AmountText,
  AmountView,
  RateText,
  RateView,
  TitleText,
  TitleView,
  Wrapper,
};
