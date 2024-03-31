import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import getToken from '../../hooks/getToken';
import {useAppDispatch} from '../../store/hooks';
import {setRate} from '../../store/slices/account';
import useAxois from '../useAxois';

interface GetRateParams {
  currency_code: string;
}

interface GetRateResponse {
  status: number;
  message: string;
  data: {
    rate: number;
  };
}

const useGetRate = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

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
        dispatch(setRate(res.data.data.rate));
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return getRate;
};

export type {GetRateParams};
export default useGetRate;
