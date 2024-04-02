import Geolocation from '@react-native-community/geolocation';
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Loading from '../../components/common/Loading';
import PlaceInfo from '../../components/common/PlaceInfo';
import MyLocationMap from '../../components/flashMob/MyLocationMap';
import {position} from '../../interfaces/states/position';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {Container, Wrapper} from './FlashMainStyle';
import axios from 'axios';
import getToken from '../../hooks/getToken';
import {setPlaces} from '../../store/slices/trip';

const FlashMain = () => {
  const [myPosition, setMyPosition] = useState<position | null>({
    latitude: 41.3879,
    longitude: 2.16992,
  });
  const [allPlaces, setAllPlaces] = useState([
    {
      attraction_id: 12455,
      thumbnail_image_url: 'https://ibb.co/2NkjSF5',
      name: 'La Sagrada Familia',
      address: 'C/ de Mallorca, 401, L`Eixample, 08013 Barcelona',
      avg_rating: 1.9,
      avg_price: 12,
      latitude: '41.404',
      longitude: '2.1744',
    },
  ]);

  // 탭바
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

  // 맵 불러오기
  useEffect(() => {
    // Geolocation.getCurrentPosition(
    //   (info: any) => {
    //     setMyPosition({
    //       latitude: info.coords.latitude,
    //       longitude: info.coords.longitude,
    //     });
    //   },
    //   console.error,
    //   {
    //     enableHighAccuracy: true,
    //     timeout: 20000,
    //   },
    // );

    const fetchAttractions = async () => {
      const {access_token} = await getToken();
      try {
        const response = await axios.get(
          `https://j10a309.p.ssafy.io/api/attraction/v1/attractions/flashmobs?latitude=${41.3879}&longitude=${2.16992}&latitude_delta=${1.2}&longitude_delta=${1.1}&category=`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        );
        const attractionsData = response.data.data.attractions;
        setAllPlaces(attractionsData);
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
        {myPosition ? (
          <MyLocationMap myPosition={myPosition} places={allPlaces} />
        ) : (
          <></>
        )}
        <PlaceInfo theme="flashmob" place={allPlaces[0]} />
      </Container>
    </Wrapper>
  );
};

export default FlashMain;
