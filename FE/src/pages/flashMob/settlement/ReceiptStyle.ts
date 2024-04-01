import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../../constants/colors';

const {width} = Dimensions.get('screen');

const Wrapper = styled.View`
  width: ${width}px;
  height: 100%;
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

const TotalView = styled.View`
  align-items: center;
`;

const TotalText = styled.Text``;

const TotalAmmount = styled.Text`
  color: ${font_dark};
  font-size: 18px;
  font-weight: 600;
`;

const HistoryView = styled.ScrollView`
  flex: 1;
`;

const History = styled.View`
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

const Ammount = styled.Text`
  font-size: 18px;
`;

const PageView = styled.View``;

const PageText = styled.Text`
  align-self: center;
  font-size: 16px;
`;

export {
  Ammount,
  CardView,
  DateTime,
  History,
  HistoryLeftView,
  HistoryView,
  Nickname,
  PageText,
  PageView,
  ProfileImg,
  ProfileView,
  TotalAmmount,
  TotalText,
  TotalView,
  Usage,
  Wrapper,
};
