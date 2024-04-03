import {TRIP_API_URL} from '@env';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';
import useGetFlashMobs from './useGetFlashMobs';

interface PatchWaitParams {
  flashmob_id: number;
}

const usePatchWait = () => {
  const axios = useAxois();
  const getFlashMobs = useGetFlashMobs();

  const patchWaitConfig = async ({flashmob_id}: PatchWaitParams) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}`,
      method: 'patch',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const patchWait = async (params: PatchWaitParams) => {
    const result = await axios
      .request(await patchWaitConfig(params))
      .then(() => {
        getFlashMobs();
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return patchWait;
};

export default usePatchWait;
