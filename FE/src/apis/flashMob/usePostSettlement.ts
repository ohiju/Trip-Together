import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {attendee} from '../../interfaces/router/flashMob/SettlementStackParams';
import useAxois from '../useAxois';

interface PostSettlementData {
  currency_code: string;
  total_price: number;
  attendees_count: number;
  attendees: attendee[];
}

interface PostSettlementParams {
  flashmob_id: number;
}

const usePostSettlement = () => {
  const axios = useAxois();

  const postSettlementConfig = async (
    {flashmob_id}: PostSettlementParams,
    data: PostSettlementData,
  ) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/settlements`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const postSettlement = async (
    params: PostSettlementParams,
    data: PostSettlementData,
  ) => {
    const result = await axios
      .request(await postSettlementConfig(params, data))
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return postSettlement;
};

export type {PostSettlementData, PostSettlementParams};
export default usePostSettlement;
