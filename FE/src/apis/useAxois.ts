import {TRIP_API_URL} from '@env';
import axios, {AxiosError, InternalAxiosRequestConfig} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

const useAxios = () => {
  const instance = axios.create();

  instance.interceptors.response.use(
    response => response,
    async (error: AxiosError<{code: string}, any>) => {
      const {config, response} = error;
      if (response && response.status === 419) {
        if (response.data.code === 'expired') {
          const originalRequest = config as InternalAxiosRequestConfig<any>;
          const refreshToken = await EncryptedStorage.getItem('refreshToken');
          // token refresh 요청
          const {data} = await axios.get(
            `${TRIP_API_URL}/api/member/v1/members/reissue`,
            {headers: {Cookie: `refreshToken=${refreshToken}`}},
          );
          // 새로운 토큰 저장
          originalRequest.headers.authorization = `Bearer ${data.data.access}`;
          // 419로 요청 실패했던 요청 새로운 토큰으로 재요청
          return axios(originalRequest);
        }
      }
    },
  );
  return instance;
};

export default useAxios;
