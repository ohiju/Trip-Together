import {TRIP_API_URL} from '@env';
import axios, {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

const useRefresh = () => {
  const refreshParams = async () => {
    const refreshToken = await EncryptedStorage.getItem('refreshToken');

    const axiosParams: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members/reissue`,
      method: 'get',
      headers: {
        'set-cookies': `refreshToken=${refreshToken};`,
      },
    };

    return axiosParams;
  };

  const refresh = async () => {
    const result = await axios
      .request(await refreshParams())
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return refresh;
};

export default useRefresh;
