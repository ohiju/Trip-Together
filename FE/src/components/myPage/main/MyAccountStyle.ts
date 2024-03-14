import styled from 'styled-components/native';
import {font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const CountryView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Flag = styled.Image`
  width: 28px;
  height: 28px;
`;

const Country = styled.Text`
  color: ${font_dark};
  font-size: 20px;
  margin-left: 10px;
`;

const BalanceView = styled.View``;

const Balance = styled.Text`
  font-size: 16px;
`;

export {Balance, BalanceView, Country, CountryView, Flag, Wrapper};
