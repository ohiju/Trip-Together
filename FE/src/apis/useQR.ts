import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import getToken from '../hooks/getToken';
import {SyncStackParams} from '../interfaces/router/myPage/SyncStackParams';
import useAxois from './useAxois';

interface QRdata {
  pin_num: string;
  attraction_business_num: string;
  quantity: number;
}

const useQR = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();

  const qrPayConfig = async (data: QRdata) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/trip-accounts/pay`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const qrPay = async (data: QRdata) => {
    console.log(data);

    const result = await axios
      .request(await qrPayConfig(data))
      .then(() => {
        navigation.navigate('travel_main');
        Alert.alert('결제가 완료되었습니다.');
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return qrPay;
};

export type {QRdata};
export default useQR;
