import {TRIP_API_URL} from '@env';
import axios, {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage/lib/typescript/EncryptedStorage';
import {user} from '../../interfaces/states/UserState';
import {useAppDispatch} from '../../store/hooks';
import {setUser} from '../../store/slices/user';

interface LoginResponse {
  user: user;
  token: {
    access_token: string;
    created_at: number;
    expires_in: number;
  };
}

const useLogin = () => {
  const dispatch = useAppDispatch();

  const loginConfig = (code: string) => {
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/oauth/token`,
      method: 'get',
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
        await EncryptedStorage.setItem('token', JSON.stringify(res.data.token));
        dispatch(setUser(res.data.user));
      })
      .catch((err: AxiosError) => {
        const statusList = [400, 500];
        if (err.status && statusList.includes(err.status)) {
          Alert.alert(err.message);
        }
      });

    return result;
  };

  return login;
};

export default useLogin;
