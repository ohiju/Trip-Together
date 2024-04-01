import styled from 'styled-components/native';
import {bg_light, bg_main, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_main};
`;

const CardView = styled.View`
  flex: 1;
  margin: 15px;
  padding: 15px;
  background: ${bg_light};
  border-radius: 10px;
`;

const ProfileView = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  padding: 15px 0;
  margin-bottom: 20px;
`;

const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const Nickname = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: ${font_dark};
  font-size: 18px;
  font-weight: 700;
`;

const AmmountView = styled.View`
  align-items: center;
`;

const AmmountText = styled.Text``;

const Ammount = styled.Text`
  color: ${font_dark};
  font-size: 18px;
  font-weight: 600;
`;

const Histories = styled.ScrollView`
  flex: 1;
`;

const HistoryView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const HistoryLeftView = styled.View`
  flex: 1;
`;

const Usage = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
`;

const DateTime = styled.Text``;

const Price = styled.Text`
  font-size: 18px;
`;

export {
  Ammount,
  AmmountText,
  AmmountView,
  CardView,
  DateTime,
  Histories,
  HistoryLeftView,
  HistoryView,
  Nickname,
  Price,
  ProfileImg,
  ProfileView,
  Usage,
  Wrapper,
};
