import styled from 'styled-components/native';
import {
  bg_danger,
  font_dark,
  font_light,
  primary,
} from '../../../constants/colors';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 10px;
`;

const LeftView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BankInfoView = styled.View`
  margin-left: 10px;
`;

const BankLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TitleText = styled.Text`
  color: ${font_dark};
  font-size: 20px;
  margin: 0 5px 5px 0;
`;

const NumText = styled.Text`
  font-size: 16px;
`;

const MainView = styled.View`
  background: ${primary};
  border-radius: 100px;
  padding: 1px 8px;
`;

const MainText = styled.Text`
  color: ${font_light};
  font-size: 12px;
`;

const BtnView = styled.Pressable`
  background: ${bg_danger};
  border-radius: 100px;
  padding: 3px 15px;
`;

const BtnText = styled.Text`
  color: ${font_light};
  font-size: 14px;
`;

export {
  BankInfoView,
  BankLogo,
  BtnText,
  BtnView,
  LeftView,
  MainText,
  MainView,
  NumText,
  TitleText,
  TitleView,
  Wrapper,
};
