import {TRIP_API_URL} from '@env';
import {RouteProp, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {RootStackParams} from '../../interfaces/router/RootStackParams';
import {RootState} from '../../store';
import {useAppSelector} from '../../store/hooks';

const PinAuth = () => {
  const {url, data, onSuccess, onError} =
    useRoute<RouteProp<RootStackParams, 'PinAuth'>>().params;
  const [pin, setPin] = useState('');
  const accessToken = useAppSelector(
    (state: RootState) => state.encrypt.dummy.access_token,
  );

  axios.request({
    url: `${TRIP_API_URL}${url}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  useEffect(() => {
    console.log(TRIP_API_URL, url, data);
  }, []);

  return <></>;
};

export default PinAuth;
