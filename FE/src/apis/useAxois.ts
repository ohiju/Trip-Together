import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {token as tokenType} from '../interfaces/states/tokenState';
import useRefresh, {RefreshResponse} from './useRefresh';

interface RefreshResult {
  status: number;
  message: string;
  data?: tokenType;
}

const useAxios = () => {
  const instance = axios.create();
  const refresh = useRefresh();

  instance.interceptors.response.use(
    response => response,
    async (error: AxiosError<{code: string}, any>) => {
      const {config, response} = error;
      const originalRequest = config as InternalAxiosRequestConfig<any>;

      if (response && response.status === 419) {
        const result = await refresh();

        if (result.status === 201) {
          const res = result as AxiosResponse<RefreshResponse>;
          // refresh_token
          const cookies = res.headers['set-cookie'];
          if (!cookies) throw new Error('쿠키가 없습니다');
          const refreshTokenCookie = cookies.find(cookie =>
            /refreshToken=/.test(cookie),
          );
          if (!refreshTokenCookie) throw new Error('리프레시 토큰이 없습니다');
          const refreshToken = refreshTokenCookie.split(';')[0].split('=')[1];
          await EncryptedStorage.setItem('refreshToken', refreshToken);
          // access_token
          const token = JSON.stringify(res.data.data);
          await EncryptedStorage.setItem('token', token);
          // 재요청
          originalRequest.headers.authorization = `Bearer ${res.data.data.access_token}`;
          return axios(originalRequest);
        } else {
          await EncryptedStorage.clear();
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default useAxios;
