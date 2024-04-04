import {TRIP_API_URL} from '@env';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';
import useGetFlashMobs from './useGetFlashMobs';

interface DeleteWaitParams {
  flashmob_id: number;
}

const useDeleteWait = () => {
  const axios = useAxois();
  const getFlashMobs = useGetFlashMobs();

  const deleteWaitConfig = async ({flashmob_id}: DeleteWaitParams) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const deleteWait = async (params: DeleteWaitParams) => {
    const result = await axios
      .request(await deleteWaitConfig(params))
      .then(() => {
        getFlashMobs();
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return deleteWait;
};

export default useDeleteWait;
