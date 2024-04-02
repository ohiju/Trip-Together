import styled from 'styled-components/native';
import {bg_main, font_dark, font_light} from '../../../constants/colors';

const Wrapper = styled.ScrollView`
  flex: 1;
`;

const GroupView = styled.View`
  padding: 20px 15px 40px 15px;
`;

const TitleView = styled.View`
  margin-bottom: 10px;
`;

const TitleText = styled.Text`
  color: ${font_dark};
  font-size: 28px;
  font-weight: 700;
`;

const SettlementView = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-color: ${bg_main};
  border-radius: 15px;
  padding: 10px;
`;

const ProfileImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

const ContentView = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const ContentText = styled.Text`
  color: ${font_dark};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Price = styled.Text``;

const BtnView = styled.View`
  gap: 10px;
`;

const Btn = styled.Pressable`
  border-radius: 10px;
  padding: 8px 10px;
  align-items: center;
`;

const BtnText = styled.Text`
  color: ${font_light};
  font-size: 14px;
`;

export {
  Btn,
  BtnText,
  BtnView,
  ContentText,
  ContentView,
  GroupView,
  Price,
  ProfileImg,
  SettlementView,
  TitleText,
  TitleView,
  Wrapper,
};
