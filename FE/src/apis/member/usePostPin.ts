import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import {ToastAndroid} from 'react-native';
import getToken from '../../hooks/getToken';
import {MyPageStackParams} from '../../interfaces/router/myPage/MyPageStackParams';
import {useAppDispatch} from '../../store/hooks';
import {setPin} from '../../store/slices/user';
import useAxois from '../useAxois';

interface PostPinData {
  pin_num: string;
  pin_num_check: string;
}

const usePostPin = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();

  const postPinConfig = async (data: PostPinData) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members/pin`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const postPin = async (data: PostPinData) => {
    const result = await axios
      .request(await postPinConfig(data))
      .then(() => {
        dispatch(setPin(true));
        navigation.navigate('MyMain');
        ToastAndroid.show('핀 번호가 등록되었습니다.', ToastAndroid.SHORT);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return postPin;
};

export default usePostPin;
