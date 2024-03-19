import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const SelectBox = styled.View`
  flex: 1;
  padding: 15px;
`;

const SelectView = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  min-height: 50px;
  padding: 10px;
`;

const Select = styled.Text`
  font-size: 18px;
`;

const Options = styled.ScrollView`
  margin: 10px 0;
`;

const OptionBox = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const OptionView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BankLogo = styled.Image`
  width: 30px;
  height: 30px;
`;

const Option = styled.Text`
  color: ${font_dark};
  font-size: 18px;
  margin-left: 3px;
`;

const BalanceView = styled.View``;

const Balance = styled.Text`
  font-size: 12px;
`;

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
