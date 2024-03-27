import {TRIP_API_URL} from '@env';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';

interface PostExchangeData {
  pin_num: string;
  account_uuid: string;
  to_currency_code: string;
  from_currency_code: string;
  to_quantity: number;
  from_quantity: number;
}

const usePostExchange = () => {
  const axios = useAxois();

  const postExchangeConfig = async (data: PostExchangeData) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/trip-account/trip-accounts`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const postExchange = async (data: PostExchangeData) => {
    const result = await axios
      .request(await postExchangeConfig(data))
      .then(() => {})
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return postExchange;
};

export default usePostExchange;
