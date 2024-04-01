import styled from 'styled-components/native';
import {
  bg_light,
  bg_lightgray,
  bg_main,
  font_dark,
} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_main};
`;

const CardView = styled.View`
  flex: 1;
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
  background: ${bg_light};
`;

const TitleView = styled.View`
  margin: 10px 0 0 15px;
`;

const Groups = styled.ScrollView`
  flex: 1;
`;

const GroupView = styled.View`
  margin-top: 15px;
`;

const DateView = styled.View`
  background: ${bg_main};
`;

const DateText = styled.Text`
  margin: 3px 15px;
`;

const HistoryView = styled.View`
  margin: 20px 15px;
`;

const DateTime = styled.Text``;

const UsageView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
`;

const UsageText = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 20px;
`;

const CheckBox = styled.Pressable``;

const Ammount = styled.Text`
  font-size: 17px;
  align-self: flex-end;
`;

const TotalView = styled.View`
  padding: 10px 15px;
  background: ${bg_light};
  border-top-width: 1px;
  border-color: ${bg_lightgray};
`;

const TotalText = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 24px;
  align-self: flex-end;
`;

export {
  Ammount,
  CardView,
  CheckBox,
  DateText,
  DateTime,
  DateView,
  GroupView,
  Groups,
  HistoryView,
  TitleView,
  TotalText,
  TotalView,
  UsageText,
  UsageView,
  Wrapper,
};
