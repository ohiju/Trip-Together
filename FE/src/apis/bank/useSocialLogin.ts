import {BANK_API_URL} from '@env';
import axios, {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import useLogin from '../member/useLogin';

interface SocialLoginData {
  client_id: '123456';
  redirect_url: 'http://localhost:8081';
  user_id: 'newuser';
  password: 'passwordsss';
}

const useSocialLogin = () => {
  const login = useLogin();

  const socialLoginConfig = (data: SocialLoginData) => {
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${BANK_API_URL}/api/member/v1/oauth/authorize`,
      method: 'post',
      data,
    };

    return axiosConfig;
  };

  const socialLogin = async (data: SocialLoginData) => {
    const result = await axios
      .request(socialLoginConfig(data))
      .then((res: AxiosResponse) => {
        login(res.config.params.code);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return socialLogin;
};

export default useSocialLogin;
