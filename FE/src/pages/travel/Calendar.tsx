import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import AppButton from '../../components/common/AppButton';
import {
  Body,
  Hightlight,
  HightlightRed,
} from '../../components/common/InfoPageStyle';
import CalendarView from '../../components/travel/Calendar';
import {BottomButton} from '../../constants/AppButton';
import {CalendarStackParams} from '../../interfaces/router/CalendarStackParams';
import {useAppDispatch} from '../../store/hooks';
import {setDate} from '../../store/slices/trip';
import {Title, TitleView, Wrapper} from './CalendarStyle';

const Calendar = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<CalendarStackParams>>();

  const handleSearchSubmit = () => {
    if (startDate !== '' && endDate !== '') {
      navigation.navigate('TripTitle');
      dispatch(setDate({start_at: startDate, end_at: endDate}));
    } else {
      Alert.alert('경고', '시작일자와 종료일자를 입력하세요');
    }
  };

  return (
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>시작 날짜</Hightlight>와{' '}
          <HightlightRed>종료 날짜</HightlightRed>를
        </Title>
        <Title>선택해주세요</Title>
      </TitleView>
      <Body>
        <CalendarView
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </Body>
      <AppButton
        style={BottomButton}
        text="다음"
        onPress={handleSearchSubmit}
      />
    </Wrapper>
  );
};

export default Calendar;
