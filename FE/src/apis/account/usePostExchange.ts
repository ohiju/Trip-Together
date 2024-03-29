import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert, ToastAndroid} from 'react-native';
import getToken from '../../hooks/getToken';
import {MyPageStackParams} from '../../interfaces/router/myPage/MyPageStackParams';
import useAxois from '../useAxois';

interface PostExchangeData {
  pin_num: string;
  account_uuid: string;
  to_currency_code: string;
  from_currency_code: string;
  to_quantity: number;
  from_quantity: number;
}

interface PostExchangeResponse {
  status: number;
  message: string;
  data: null;
}

const usePostExchange = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();

  const postExchangeConfig = async (data: PostExchangeData) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/trip-account/trip-accounts`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const postExchange = async (data: PostExchangeData) => {
    const result = await axios
      .request(await postExchangeConfig(data))
      .then((res: AxiosResponse<PostExchangeResponse>) => {
        navigation.navigate('MyMain');
        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return postExchange;
};

export type {PostExchangeData};
export default usePostExchange;
