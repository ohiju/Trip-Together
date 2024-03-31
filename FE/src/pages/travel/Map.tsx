import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import GoogleMap from '../../components/travel/GoogleMap';
import SearchPlace from '../../components/travel/SearchPlace';
import {MapStackParams} from '../../interfaces/router/MapStackParams';
import {Container, PlanImage, PlanIcon} from './MapStyle';
import PlaceInfo from '../../components/common/PlaceInfo';
import {useAppSelector} from '../../store/hooks';
import axios from 'axios';
import {useAppDispatch} from '../../store/hooks';
import {setPlaces} from '../../store/slices/trip';

const Map = () => {
  const navigation = useNavigation<NavigationProp<MapStackParams>>();
  const trip = useAppSelector(state => state.trip.tripInfo);

  const dispatch = useAppDispatch();
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiY3JlYXRlZCI6MTcxMTYxMzc3MzMzMywiZXhwaXJlc0luIjoyNTkyMDAwMDAwLCJhdXRoIjoiQVVUSE9SSVRZIiwiZXhwIjoxNzE0MjA1NzczLCJpZCI6Mn0.X62ICtdzH9UzvGlkwWp1-_YxO-q0LqredwS48rXHjc4';

  useEffect(() => {
    const fetchAttractions = async () => {
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
        const attractionsData = response.data.data;
        dispatch(setPlaces(attractionsData));
      } catch (error) {
        console.error('Error fetching attraction data:', error);
      }
    };

    fetchAttractions();
  }, []);

  const handlePlanPress = () => {
    navigation.navigate('plandetail');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <GoogleMap trip={trip} />
        <SearchPlace />
        <PlanIcon onPress={handlePlanPress}>
          <PlanImage source={require('../../assets/images/planning.png')} />
        </PlanIcon>
        <PlaceInfo theme="trip" place={trip.places[0]} />
      </Container>
    </SafeAreaView>
  );
};
export default Map;
