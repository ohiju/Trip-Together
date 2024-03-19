import React from 'react';
import {Wrapper} from './CalendarStyle';
import CalendarView from '../../components/travel/Calendar';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {CalendarStackParams} from '../../interfaces/router/CalendarStackParams';
import AppButton from '../../components/common/AppButton';
import {BottomButton} from '../../constants/AppButton';

// const cvtParamDate = (date: Date): string => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

const Calendar = () => {
  const navigation = useNavigation<NavigationProp<CalendarStackParams>>();

  const handleSearchSubmit = () => {
    navigation.navigate('TripTitle');
  };

  return (
    <Wrapper>
      <CalendarView />
      <AppButton
        style={BottomButton}
        text="다음"
        onPress={handleSearchSubmit}
      />
    </Wrapper>
  );
};

export default Calendar;
