import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';

const useLogout = () => {
  const axios = useAxois();

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
      .then(async (res: AxiosResponse) => {
        console.log(res);
        await EncryptedStorage.removeItem('token');
        await EncryptedStorage.removeItem('refreshToken');
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return logout;
};

export default useLogout;
