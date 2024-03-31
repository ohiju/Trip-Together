import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {imagePath} from '../../assets/images/imagePath';
import PlaceInfo from '../../components/common/PlaceInfo';
import GoogleMap from '../../components/travel/GoogleMap';
import SearchPlace from '../../components/travel/SearchPlace';
import {MapStackParams} from '../../interfaces/router/MapStackParams';
import {Container, PlanImage, PlanIcon} from './MapStyle';
import {useAppSelector} from '../../store/hooks';
import axios from 'axios';
import {useAppDispatch} from '../../store/hooks';
import {setPlaces} from '../../store/slices/trip';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import getToken from '../../hooks/getToken';

const Map = () => {
  const navigation = useNavigation<NavigationProp<MapStackParams>>();
  const trip = useAppSelector(state => state.trip.tripInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAttractions = async () => {
      const {access_token} = await getToken();
      try {
        const response = await axios.get(
          `https://j10a309.p.ssafy.io/api/attraction/v1/attractions/click?latitude=${
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
          <PlanImage source={imagePath.planning} />
        </PlanIcon>
        <PlaceInfo theme="trip" place={trip.places[0]} />
      </Container>
    </SafeAreaView>
  );
};
export default Map;
