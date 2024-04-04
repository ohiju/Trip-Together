import {BANK_API_URL} from '@env';
import axios, {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import useLogin from '../member/useLogin';

interface SocialLoginData {
  client_id: 'test';
  redirect_url: 'https://j10a309.p.ssafy.io';
  user_id: string;
  password: string;
}

interface SocialLoginResponse {
  status: number;
  message: string;
  data: {
    code: string;
  };
}

const useSocialLogin = () => {
  const login = useLogin();

  const socialLoginConfig = (data: SocialLoginData) => {
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${BANK_API_URL}/api/member/v1/oauth/authorize`,
      method: 'POST',
      data,
    };

    return axiosConfig;
  };

  const socialLogin = async (data: SocialLoginData) => {
    const result = await axios
      .request(socialLoginConfig(data))
      .then((res: AxiosResponse<SocialLoginResponse>) => {
        login(res.data.data.code);
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return socialLogin;
};

export type {SocialLoginData};
export default useSocialLogin;
