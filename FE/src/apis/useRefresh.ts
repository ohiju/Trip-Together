import {TRIP_API_URL} from '@env';
import axios, {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {token} from '../interfaces/states/tokenState';

interface RefreshResponse {
  status: number;
  message: string;
  data: token;
}

const useRefresh = () => {
  const refreshParams = async () => {
    const refreshToken = await EncryptedStorage.getItem('refreshToken');

    const axiosParams: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members/reissue`,
      method: 'get',
      headers: {
        'Set-Cookie': `refreshToken=${refreshToken};`,
      },
    };

    return axiosParams;
  };

  const refresh = async () => {
    const result = await axios
      .request(await refreshParams())
      .then((res: AxiosResponse<RefreshResponse>) => {
        console.log(res.data);

        return res;
      })
      .catch((err: AxiosError) => {
        return err;
      });

    return result;
  };

  return refresh;
};

export type {RefreshResponse};
export default useRefresh;
