import {Calendar} from 'react-native-calendars';
import styled from 'styled-components/native';
import {bg_main} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  padding: 0 15px;
`;

const AppCalendar = styled(Calendar)`
  width: 100%;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: ${bg_main};
  padding: 0 15px;
`;

const DateView = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

const DateContainer = styled.View`
  width: 100%;
  border-radius: 200px;
  background-color: ${bg_main};
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
`;

const DateText = styled.Text`
  font-size: 15px;
`;

const SelectedDate = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: center;
`;

export {AppCalendar, DateContainer, DateText, DateView, SelectedDate, Wrapper};
