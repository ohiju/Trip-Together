import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';

interface DeleteSyncAccountData {
  pin_num: string;
  account_uuid: string;
}

const useDeleteSyncAccount = () => {
  const axios = useAxois();

  const deleteSyncAccountConfig = async (data: DeleteSyncAccountData) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/sync-account/sync-accounts`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const deleteSyncAccount = async (data: DeleteSyncAccountData) => {
    const result = await axios
      .request(await deleteSyncAccountConfig(data))
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return deleteSyncAccount;
};

export type {DeleteSyncAccountData};
export default useDeleteSyncAccount;
