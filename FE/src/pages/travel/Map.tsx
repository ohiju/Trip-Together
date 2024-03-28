import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import GoogleMap from '../../components/travel/GoogleMap';
import SearchPlace from '../../components/travel/SearchPlace';
import {MapStackParams} from '../../interfaces/router/MapStackParams';
import {Container, PlanImage, PlanIcon} from './MapStyle';
import PlaceInfo from '../../components/common/PlaceInfo';
import {useAppSelector} from '../../store/hooks';
import axios from 'axios';

const Map = () => {
  const navigation = useNavigation<NavigationProp<MapStackParams>>();
  const [places, setPlaces] = useState([]);

  const trip = useAppSelector(state => state.trip.tripInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://j10a309.p.ssafy.io/api/attraction/v1/attractions/click?latitude=${
            trip.start_latitude
          }&longitude=${
            trip.start_longitude
          }&latitude_delta=${2.922}&longitude_delta=${2.421}`,
        );
        const res = response.data.data;
        console.log(res);
        setPlaces(res);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [trip]);

  const handlePlanPress = () => {
    navigation.navigate('plandetail');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <GoogleMap trip={trip} places={places} />
        <SearchPlace />
        <PlanIcon onPress={handlePlanPress}>
          <PlanImage source={require('../../assets/images/planning.png')} />
        </PlanIcon>
        <PlaceInfo theme="trip" />
      </Container>
    </SafeAreaView>
  );
};
export default Map;
