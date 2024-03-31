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

const FlashMain = () => {
  const [myPosition, setMyPosition] = useState<position | null>(null);

  // 탭바
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

  // 맵 불러오기
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (info: any) => {
        setMyPosition({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      console.error,
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  }, []);

  return (
    <Wrapper>
      <Container>
        {myPosition ? <MyLocationMap center={myPosition} /> : <Loading />}
        <PlaceInfo theme="FlashPlaces" />
      </Container>
    </Wrapper>
  );
};

export default FlashMain;
