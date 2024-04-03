import {TRIP_API_URL} from '@env';
import axios, {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {user} from '../../interfaces/states/UserState';
import {token} from '../../interfaces/states/tokenState';
import {useAppDispatch} from '../../store/hooks';
import {setUser} from '../../store/slices/user';

interface LoginResponse {
  status: number;
  message: string;
  data: {
    user: user;
    token: token;
  };
}

const useLogin = () => {
  const dispatch = useAppDispatch();

  const loginConfig = (code: string) => {
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/auth/token`,
      method: 'GET',
      params: {
        code,
      },
    };

    return axiosConfig;
  };

  const login = async (code: string) => {
    const result = await axios
      .request(loginConfig(code))
      .then(async (res: AxiosResponse<LoginResponse>) => {
        // refresh_token
        const cookies = res.headers['set-cookie'];
        if (!cookies) throw new Error('쿠키가 없습니다');
        const refreshTokenCookie = cookies.find(cookie =>
          /refreshToken=/.test(cookie),
        );
        if (!refreshTokenCookie) throw new Error('리프레시 토큰이 없습니다');
        const refreshToken = refreshTokenCookie.split(';')[0].split('=')[1];
        await EncryptedStorage.setItem('refreshToken', refreshToken);
        // acess_token
        if (!res.data.data.token) throw new Error('액세스 토큰이 없습니다');
        await EncryptedStorage.setItem(
          'token',
          JSON.stringify(res.data.data.token),
        );
        // user
        if (!res.data.data.token) throw new Error('유저 정보가 없습니다.');
        await EncryptedStorage.setItem(
          'user',
          JSON.stringify(res.data.data.user),
        );
        dispatch(setUser(res.data.data.user));
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return login;
};

export default useLogin;
