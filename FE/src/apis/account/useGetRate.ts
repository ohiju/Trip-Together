import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';

interface GetRateParams {
  currency_code: string;
}

interface GetRateResponse {
  rate: number;
}

const useGetRate = () => {
  const axios = useAxois();

  const getRateConfig = async (params: GetRateParams) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/trip-account/rate`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params,
    };

    return axiosConfig;
  };

  const getRate = async (params: GetRateParams) => {
    const result = await axios
      .request(await getRateConfig(params))
      .then((res: AxiosResponse<GetRateResponse>) => {
        return res.data.rate;
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return getRate;
};

export default useGetRate;
