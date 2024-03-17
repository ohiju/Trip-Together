import React from 'react';
import {Wrapper} from './CalendarStyle';
import CalendarView from '../../components/travel/Calendar';

// const cvtParamDate = (date: Date): string => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

const Calendar = () => {
  return (
    <Wrapper>
      <CalendarView />
    </Wrapper>
  );
};

export default Calendar;
