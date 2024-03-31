import React, {useState} from 'react';
import {
  Wrapper,
  TitleContainer,
  TitleInput,
  TitleLength,
  TitleLengthText,
} from './TripTitleStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TripTitleStackParams} from '../../interfaces/router/TripTitleStackParams';
import AppButton from '../../components/common/AppButton';
import {BottomButton} from '../../constants/AppButton';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';
import {Alert, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setTripTitle} from '../../store/slices/trip';
import axios, {AxiosError} from 'axios';
import {setPlaces} from '../../store/slices/trip';

const TripTitle = () => {
  const navigation = useNavigation<NavigationProp<TripTitleStackParams>>();
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('오희주님의 프랑스 여행 계획');
  const trip = useAppSelector(state => state.trip.tripInfo);
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiY3JlYXRlZCI6MTcxMTYxMzc3MzMzMywiZXhwaXJlc0luIjoyNTkyMDAwMDAwLCJhdXRoIjoiQVVUSE9SSVRZIiwiZXhwIjoxNzE0MjA1NzczLCJpZCI6Mn0.X62ICtdzH9UzvGlkwWp1-_YxO-q0LqredwS48rXHjc4';
  let finishPressSuccess = false;

  const handleSubmit = async () => {
    dispatch(setTripTitle(title));
    await handleFinishPress();
    if (!finishPressSuccess) {
      return;
    }
    try {
      const response = await axios.get(
        `https://j10a309.p.ssafy.io/api/attraction/v1/attractions/click?latitude=${
          trip.start_latitude
        }&longitude=${
          trip.start_longitude
        }&latitude_delta=${1.2}&longitude_delta=${1.1}&category=`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const res = response.data.data;
      dispatch(setPlaces(res));
      navigation.navigate('map', {title});
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleFinishPress = async () => {
    const data = {
      start_region_id: trip.start_region,
      start_at: new Date(trip.start_at),
      end_at: new Date(trip.end_at),
      title: title,
      total_estimated_budget: trip.total_estimated_budget,
      daily_plans: trip.daily_plans,
    };
    try {
      await axios.post(`https://j10a309.p.ssafy.io/api/plan/v1/plans`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      finishPressSuccess = true;
    } catch (err) {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse) {
        Alert.alert('알림', (errorResponse as any).data.message);
      }
      navigation.navigate('travel_main');
    }
  };

  return (
    <DismissKeyboardView style={Style.container}>
      <Wrapper>
        <TitleContainer>
          <TitleInput
            placeholder="오희주님의 프랑스 여행 계획"
            value={title}
            onChangeText={setTitle}
          />
          <TitleLength>
            <TitleLengthText>{title.length}/15</TitleLengthText>
          </TitleLength>
        </TitleContainer>
        <AppButton style={BottomButton} text="다음" onPress={handleSubmit} />
      </Wrapper>
    </DismissKeyboardView>
  );
};

const Style = StyleSheet.create({
  container: {flex: 1},
});

export default TripTitle;
