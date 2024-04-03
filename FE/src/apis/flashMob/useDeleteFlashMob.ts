import {TRIP_API_URL} from '@env';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';
import useGetFlashMobs from './useGetFlashMobs';

interface DeleteFlashMobParams {
  flashmob_id: number;
}

const useDeleteFlashMob = () => {
  const axios = useAxois();
  const getFlashMobs = useGetFlashMobs();

  const deleteFlashMobConfig = async ({flashmob_id}: DeleteFlashMobParams) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/exit`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const deleteFlashMob = async (params: DeleteFlashMobParams) => {
    const result = await axios
      .request(await deleteFlashMobConfig(params))
      .then(() => {
        getFlashMobs();
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return deleteFlashMob;
};

export default useDeleteFlashMob;
