import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';

interface PostRemmitanceData {
  pin_num: string;
}

interface PostRemmitanceParams {
  flashmob_id: number;
  settlement_id: number;
}

const usePostRemmitance = () => {
  const axios = useAxois();

  const postRemmitanceConfig = async (
    {flashmob_id, settlement_id}: PostRemmitanceParams,
    data: PostRemmitanceData,
  ) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/settlemetns/${settlement_id}`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const postRemmitacne = async (
    params: PostRemmitanceParams,
    data: PostRemmitanceData,
  ) => {
    const result = await axios
      .request(await postRemmitanceConfig(params, data))
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return postRemmitacne;
};

export type {PostRemmitanceData, PostRemmitanceParams};
export default usePostRemmitance;
