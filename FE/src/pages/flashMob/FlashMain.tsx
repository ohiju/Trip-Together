import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import MyLocationMap from '../../components/flashMob/MyLocationMap';
import {Container} from './FlashMainStyle';
import PlaceInfo from '../../components/common/PlaceInfo';
import Geolocation from '@react-native-community/geolocation';
import {useFocusEffect} from '@react-navigation/native';
import {setDisplay} from '../../store/slices/tabState';
import {useAppDispatch} from '../../store/hooks';

const FlashMain = () => {
  const [myPosition, setMyPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const dispatch = useAppDispatch();

  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

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
    <SafeAreaView style={{flex: 1}}>
      <Container>
        {myPosition ? <MyLocationMap center={myPosition} /> : <></>}
        <PlaceInfo theme="flashmob" />
      </Container>
    </SafeAreaView>
  );
};

export default FlashMain;
