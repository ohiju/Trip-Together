import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import getToken from '../../hooks/getToken';
import {RootStackParams} from '../../interfaces/router/RootStackParams';
import {useAppDispatch} from '../../store/hooks';
import {deleteUser} from '../../store/slices/user';
import useAxois from '../useAxois';

const useLogout = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const logoutConfig = async () => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members/logout`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const logout = async () => {
    const result = await axios
      .request(await logoutConfig())
      .then(async () => {
        await EncryptedStorage.clear();
        dispatch(deleteUser(true));
      })
      .catch(async (err: AxiosError) => {
        console.error(err);
        await EncryptedStorage.clear();
        dispatch(deleteUser(true));
        navigation.navigate('Login');
      });

    return result;
  };

  return logout;
};

export default useLogout;
