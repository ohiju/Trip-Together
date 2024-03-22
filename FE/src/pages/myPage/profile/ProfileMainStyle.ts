import styled from 'styled-components/native';
import {bg_light, bg_main} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_main};
`;

const ProfileView = styled.View`
  flex: 5;
  background: ${bg_light};
  margin-bottom: 15px;
  padding: 20px 15px;
`;

const HistoryBtnBox = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
`;

const TripHistoryView = styled.View`
  flex: 1;
  margin-right: 5px;
`;

const FlashHistoryView = styled.View`
  flex: 1;
  margin-left: 5px;
`;

const MyDataView = styled.View`
  flex: 6;
  background: ${bg_light};
`;

export {
  FlashHistoryView,
  HistoryBtnBox,
  MyDataView,
  ProfileView,
  TripHistoryView,
  Wrapper,
};
