import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {receiptDetail} from '../../interfaces/states/ChatState';
import {useAppDispatch} from '../../store/hooks';
import {setReceipt} from '../../store/slices/chat';
import useAxois from '../useAxois';

interface GetReceiptParams {
  flashmob_id: number;
  settlement_id: number;
}

interface GetReceiptResponse {
  status: number;
  message: string;
  data: receiptDetail;
}

const useGetReceipt = () => {
  const axios = useAxois();
  const dispatcch = useAppDispatch();

  const getReceiptConfig = async ({
    flashmob_id,
    settlement_id,
  }: GetReceiptParams) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/settlements/${settlement_id}/receipt`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getReceipt = async (params: GetReceiptParams) => {
    const result = await axios
      .request(await getReceiptConfig(params))
      .then((res: AxiosResponse<GetReceiptResponse>) => {
        console.log(res.data);

        dispatcch(setReceipt(res.data.data));
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return getReceipt;
};

export default useGetReceipt;
