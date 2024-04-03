import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {ToastAndroid} from 'react-native';
import getToken from '../../hooks/getToken';
import {MyPageStackParams} from '../../interfaces/router/myPage/MyPageStackParams';
import useAxois from '../useAxois';

interface PatchPinData {
  pre_pin_num: string;
  new_pin_num: string;
  new_pin_num_check: string;
}

const usePatchPin = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();

  const patchPinConfig = async (data: PatchPinData) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members/pin`,
      method: 'patch',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const patchPin = async (data: PatchPinData) => {
    const result = await axios
      .request(await patchPinConfig(data))
      .then((res: AxiosResponse) => {
        navigation.navigate('MyMain');
        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      })
      .catch((err: AxiosResponse) => {
        console.error(err);
      });

    return result;
  };

  return patchPin;
};

export type {PatchPinData};
export default usePatchPin;
