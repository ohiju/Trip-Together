import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import getToken from '../../hooks/getToken';
import {syncAccount} from '../../interfaces/states/UserState';
import {useAppDispatch} from '../../store/hooks';
import {setSyncAccounts} from '../../store/slices/user';
import useAxois from '../useAxois';

interface GetSyncAccountsResponse {
  status: number;
  message: string;
  data: {
    sync_accounts: syncAccount[];
  };
}

const useGetSyncAccounts = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const getSyncAccountsConfig = async () => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/sync-account/sync-accounts`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getSyncAccounts = async () => {
    const result = await axios
      .request(await getSyncAccountsConfig())
      .then((res: AxiosResponse<GetSyncAccountsResponse>) => {
        dispatch(setSyncAccounts(res.data.data.sync_accounts));
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return getSyncAccounts;
};

export default useGetSyncAccounts;
