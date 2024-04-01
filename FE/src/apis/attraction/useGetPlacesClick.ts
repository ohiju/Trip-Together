import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';

interface GetPlacesClickParams {
  latitude: number;
  longitude: number;
  category?: string;
  latitude_delta: number;
  longitude_delta: number;
}

const useGetPlacesClick = () => {
  const axios = useAxois();

  const getPlacesClickConfig = async (params: GetPlacesClickParams) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/attraction/v1/attractions/click`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params,
    };

    return axiosConfig;
  };

  const getPlacesClick = async (params: GetPlacesClickParams) => {
    const result = await axios
      .request(await getPlacesClickConfig(params))
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });

    return result;
  };

  return getPlacesClick;
};

export type {GetPlacesClickParams};
export default useGetPlacesClick;
