import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {attendee} from '../../interfaces/states/ChatState';
import {useAppDispatch} from '../../store/hooks';
import {setSettlement} from '../../store/slices/chat';
import useAxois from '../useAxois';

interface GetSettlementParams {
  flashmob_id: number;
  settlement_id: number;
}

interface GetSettlementResponse {
  status: number;
  message: string;
  data: {
    attendees: attendee[];
  };
}

const useGetSettlement = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const getSettlementConfig = async ({
    flashmob_id,
    settlement_id,
  }: GetSettlementParams) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/settlements/${settlement_id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getSettlement = async (params: GetSettlementParams) => {
    const result = await axios
      .request(await getSettlementConfig(params))
      .then((res: AxiosResponse<GetSettlementResponse>) => {
        dispatch(setSettlement(res.data.data));
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return getSettlement;
};

export default useGetSettlement;
