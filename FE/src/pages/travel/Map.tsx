import {TRIP_API_URL} from '@env';
import axios from 'axios';
import React, {useEffect} from 'react';
import PlaceInfo from '../../components/common/PlaceInfo';
import GoogleMap from '../../components/travel/GoogleMap';
import SearchPlace from '../../components/travel/SearchPlace';
import getToken from '../../hooks/getToken';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setPlaces} from '../../store/slices/trip';
import {Container, Wrapper} from './MapStyle';

const Map = () => {
  const trip = useAppSelector(state => state.trip.tripInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAttractions = async () => {
      const {access_token} = await getToken();
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
        const attractionsData = response.data.data;
        dispatch(setPlaces(attractionsData));
      } catch (error) {
        console.error('Error fetching attraction data:', error);
      }
    };

    fetchAttractions();
  }, []);

  return (
    <Wrapper>
      <Container>
        <GoogleMap trip={trip} />
        <SearchPlace />
        <PlaceInfo theme="trip" place={trip.places[0]} />
      </Container>
    </Wrapper>
  );
};

export default Map;
