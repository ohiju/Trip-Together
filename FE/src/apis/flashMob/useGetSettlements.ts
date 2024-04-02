import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {settlements} from '../../interfaces/states/ChatState';
import {useAppDispatch} from '../../store/hooks';
import {setSettlements} from '../../store/slices/chat';
import useAxois from '../useAxois';

interface GetSettlementsParams {
  flashmob_id: number;
}

interface GetSettlementsResponse {
  status: number;
  message: string;
  data: settlements;
}

const useGetSettlements = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const getSettlementsConfig = async ({flashmob_id}: GetSettlementsParams) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/settlements`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getSettlements = async (params: GetSettlementsParams) => {
    const result = await axios
      .request(await getSettlementsConfig(params))
      .then((res: AxiosResponse<GetSettlementsResponse>) => {
        dispatch(setSettlements(res.data.data));
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return getSettlements;
};

export default useGetSettlements;
