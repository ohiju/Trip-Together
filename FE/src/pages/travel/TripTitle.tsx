import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import axios, {AxiosError} from 'axios';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import AppButton from '../../components/common/AppButton';
import {
  Body,
  Hightlight,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../components/common/InfoPageStyle';
import {BottomButton} from '../../constants/AppButton';
import getToken from '../../hooks/getToken';
import {TripTitleStackParams} from '../../interfaces/router/TripTitleStackParams';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setPlaces, setPlanId, setTripTitle} from '../../store/slices/trip';
import {
  TitleContainer,
  TitleInput,
  TitleLength,
  TitleLengthText,
  Wrapper,
} from './TripTitleStyle';

const TripTitle = () => {
  const navigation = useNavigation<NavigationProp<TripTitleStackParams>>();
  const dispatch = useAppDispatch();
  const username = useAppSelector(state => state.user.user.username);
  const nation = useAppSelector(state => state.trip.tripInfo.nation);
  const [title, setTitle] = useState(`${username}님의 ${nation} 여행 계획`);
  const trip = useAppSelector(state => state.trip.tripInfo);
  let finishPressSuccess = false;

  const handleSubmit = async () => {
    const {access_token} = await getToken();
    const input = title ? title : `${username}님의 ${nation} 여행 계획`;
    dispatch(setTripTitle(input));
    await handleFinishPress();
    if (!finishPressSuccess) {
      return;
    }
    try {
      const response = await axios.get(
        `${TRIP_API_URL}/api/attraction/v1/attractions/click?latitude=${
          trip.start_latitude
        }&longitude=${
          trip.start_longitude
        }&latitude_delta=${1.2}&longitude_delta=${1.1}&category=`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      const res = response.data.data;
      dispatch(setPlaces(res));
      navigation.navigate('map', {input});
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleFinishPress = async () => {
    const {access_token} = await getToken();

    const data = {
      start_region_id: trip.start_region,
      start_at: new Date(trip.start_at),
      end_at: new Date(trip.end_at),
      title: title,
      total_estimated_budget: trip.total_estimated_budget,
      daily_plans: trip.daily_plans,
    };
    try {
      const response = await axios.post(
        `${TRIP_API_URL}/api/plan/v1/plans`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      dispatch(setPlanId(response.data.data));
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
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>여행 제목</Hightlight>을 입력해주세요
        </Title>
      </TitleView>
      <SloganView>
        <Slogan>최대 15자까지 제목을 입력할 수 있어요!</Slogan>
      </SloganView>
      <Body>
        <TitleContainer>
          <TitleInput
            placeholder={`${username}님의 ${nation} 여행 계획`}
            value={title}
            onChangeText={setTitle}
          />
          <TitleLength>
            <TitleLengthText>{title.length}/15</TitleLengthText>
          </TitleLength>
        </TitleContainer>
      </Body>
      <AppButton style={BottomButton} text="다음" onPress={handleSubmit} />
    </Wrapper>
  );
};

export default TripTitle;
