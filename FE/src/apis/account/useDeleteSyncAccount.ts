import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {MyPageStackParams} from '../../interfaces/router/myPage/MyPageStackParams';
import useAxois from '../useAxois';
import useGetSyncAccounts from './useGetSyncAccounts';

interface DeleteSyncAccountData {
  pin_num: string;
  account_uuid: string;
}

const useDeleteSyncAccount = () => {
  const axios = useAxois();
  const getSyncAccounts = useGetSyncAccounts();
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();

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
      .then(() => {
        navigation.navigate('MyMain');
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
