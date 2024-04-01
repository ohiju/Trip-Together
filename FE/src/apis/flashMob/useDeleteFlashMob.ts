import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';

interface DeleteFlashMobParams {
  flashmob_id: number;
}

const useDeleteFlashMob = () => {
  const axios = useAxois();

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
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return deleteFlashMob;
};

export default useDeleteFlashMob;
