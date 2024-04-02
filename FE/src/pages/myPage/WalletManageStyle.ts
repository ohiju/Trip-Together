import styled from 'styled-components/native';
import {
  bg_danger,
  bg_light,
  bg_lightgray,
  font_dark,
  font_light,
} from '../../constants/colors';

const Wrapper = styled.ScrollView`
  flex: 1;
  background: ${bg_light};
`;

const Accounts = styled.View`
  padding: 15px;
`;

const AccountRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Account = styled.View`
  width: 48%;
  align-items: center;
  padding: 15px;
  border-width: 1px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-radius: 10px;
  border-color: ${bg_lightgray};
`;

const CountryView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Flag = styled.Image`
  width: 70px;
  height: 70px;
`;

const Country = styled.Text`
  color: ${font_dark};
  font-size: 20px;
`;

const BalanceView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Balance = styled.Text`
  font-size: 16px;
  margin-left: 20px;
`;

const BtnView = styled.View``;

const Btn = styled.Pressable`
  background: ${bg_danger};
  padding: 10px 25px;
  border-radius: 10px;
`;

const BtnText = styled.Text`
  color: ${font_light};
`;

export {
  Account,
  AccountRow,
  Accounts,
  Balance,
  BalanceView,
  Btn,
  BtnText,
  BtnView,
  Country,
  CountryView,
  Flag,
  Wrapper,
};
