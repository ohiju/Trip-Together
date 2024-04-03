import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import {Alert, ToastAndroid} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import getToken from '../../hooks/getToken';
import {MyPageStackParams} from '../../interfaces/router/myPage/MyPageStackParams';
import {user as userType} from '../../interfaces/states/UserState';
import {useAppDispatch} from '../../store/hooks';
import {setPin} from '../../store/slices/user';
import useAxois from '../useAxois';
import useLogout from './useLogout';

interface PostPinData {
  pin_num: string;
  pin_num_check: string;
}

const usePostPin = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();
  const logout = useLogout();
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
      .then(async () => {
        await EncryptedStorage.getItem('user')
          .then(item => {
            if (!item) {
              logout();
              throw new Error('유저 정보가 없습니다.');
            }
            const user: userType = JSON.parse(item);
            const newUser: userType = {
              ...user,
              is_pin: true,
            };
            return JSON.stringify(newUser);
          })
          .then(async newUser => {
            await EncryptedStorage.setItem('user', newUser);
          });
        dispatch(setPin(true));
        navigation.navigate('MyMain');
        ToastAndroid.show('핀 번호가 등록되었습니다.', ToastAndroid.SHORT);
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return postPin;
};

export type {PostPinData};
export default usePostPin;
