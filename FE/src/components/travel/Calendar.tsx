import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';

const CalendarView = () => {
  const markedDates = {
    '2024-03-26': {selected: true},
    '2024-03-27': {marked: true},
    '2024-03-28': {marked: true},
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedDates}
      theme={{
        selectedDayBackgroundColor: 'red',
        arrowColor: 'blue',
        dotColor: 'green',
        todayTextColor: 'yellow',
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 100,
    width: 400,
  },
});

export default CalendarView;
