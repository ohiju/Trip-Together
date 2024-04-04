import styled from 'styled-components/native';
import {font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const OptionView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BankLogo = styled.Image`
  width: 20px;
  height: 20px;
`;

const Option = styled.Text`
  color: ${font_dark};
  font-size: 16px;
  margin-left: 3px;
`;

export {BankLogo, Option, OptionView, Wrapper};
