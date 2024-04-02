import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {TRIP_API_URL} from '@env';

const useAxios = () => {
  const instance = axios.create();

  instance.interceptors.response.use(
    response => response,
    async error => {
      const {
        config,
        response: {status},
      } = error;
      if (status === 419) {
        if (error.response.data.code === 'expired') {
          const originalRequest = config;
          const refreshToken = await EncryptedStorage.getItem('refreshToken');
          // token refresh 요청
          const {data} = await axios.get(
            `${TRIP_API_URL}/api/member/v1/members/reissue`, // token refresh api
            {headers: {Cookie: `refreshToken=${refreshToken}`}}, // Send refresh token in cookie header
          );
          // 새로운 토큰 저장
          originalRequest.headers.authorization = `Bearer ${data.data.accessToken}`;
          // 419로 요청 실패했던 요청 새로운 토큰으로 재요청
          return axios(originalRequest);
        }
      }
    },
  );
  return instance;
};

export default useAxios;
