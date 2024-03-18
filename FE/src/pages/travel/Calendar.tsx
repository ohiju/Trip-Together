import React from 'react';
import {Wrapper} from './CalendarStyle';
import CalendarView from '../../components/travel/Calendar';
import {useNavigation} from '@react-navigation/native';
import {NextButton, NextButtonText} from './CalendarStyle';
import {NavigationProp} from '@react-navigation/native';
import {MapStackParams} from '../../interfaces/router/MapStackParams';

// const cvtParamDate = (date: Date): string => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

const Calendar = () => {
  const navigation = useNavigation<NavigationProp<MapStackParams>>();

  const handleSearchSubmit = () => {
    navigation.navigate('map');
  };

  return (
    <Wrapper>
      <CalendarView />
      <NextButton onPress={handleSearchSubmit}>
        <NextButtonText>다음</NextButtonText>
      </NextButton>
    </Wrapper>
  );
};

export default Calendar;
