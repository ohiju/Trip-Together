import Geolocation from '@react-native-community/geolocation';
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import useGetPlacesClick, {
  GetPlacesClickParams,
} from '../../apis/attraction/useGetPlacesClick';
import AppMap from '../../components/common/AppMap';
import SelectedPlace from '../../components/flashMob/main/SelectedPlace';
import {position} from '../../interfaces/states/position';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {Container, Wrapper} from './FlashMainStyle';

const FlashMain = () => {
  const [myPosition, setMyPosition] = useState<position | null>(null);
  const getPlacesClick = useGetPlacesClick();

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

  // 리스트 불러오기
  useEffect(() => {
    if (!myPosition) return;
    const params: GetPlacesClickParams = {
      latitude: myPosition.latitude,
      longitude: myPosition.longitude,
      latitude_delta: 10,
      longitude_delta: 10,
    };
    getPlacesClick(params);
  }, [myPosition]);

  return (
    <Wrapper>
      <Container>
        {myPosition ? <AppMap center={myPosition} /> : <></>}
        <SelectedPlace />
      </Container>
    </Wrapper>
  );
};

export default FlashMain;
