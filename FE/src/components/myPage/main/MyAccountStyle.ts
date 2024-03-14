import styled from 'styled-components/native';
import {font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const CountryView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Flag = styled.Image`
  width: 34px;
  height: 34px;
`;

const Country = styled.Text`
  color: ${font_dark};
  font-size: 24px;
  margin-left: 10px;
`;

const BalanceView = styled.View``;

const Balance = styled.Text`
  font-size: 20px;
`;

export {Balance, BalanceView, Country, CountryView, Flag, Wrapper};
