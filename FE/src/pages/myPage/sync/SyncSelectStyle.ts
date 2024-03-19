import styled from 'styled-components/native';
import {bg_light} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const SelectBox = styled.View`
  flex: 1;
  padding: 15px;
`;

const SelectView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 10px;
`;

const Select = styled.Text`
  font-size: 18px;
`;

const Options = styled.ScrollView`
  margin: 10px 0;
`;

const OptionBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const OptionView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BankLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

const Option = styled.Text``;

const BalanceView = styled.View``;

const Balance = styled.Text``;

export {
  Balance,
  BalanceView,
  BankLogo,
  Option,
  OptionBox,
  OptionView,
  Options,
  Select,
  SelectBox,
  SelectView,
  Wrapper,
};
