import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert, ToastAndroid} from 'react-native';
import getToken from '../../hooks/getToken';
import {SyncStackParams} from '../../interfaces/router/myPage/SyncStackParams';
import useAxois from '../useAxois';

interface PostSyncAccountData {
  pin_num: string;
  is_main: 0 | 1;
  account_uuid: string;
}

interface PostSyncAccountResponse {
  status: number;
  message: string;
  data: null;
}

const usePostSyncAccount = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();

  const postSyncAccountConfig = async (data: PostSyncAccountData) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/sync-account/sync-accounts`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const postSyncAccount = async (data: PostSyncAccountData) => {
    const result = await axios
      .request(await postSyncAccountConfig(data))
      .then((res: AxiosResponse<PostSyncAccountResponse>) => {
        navigation.navigate('SyncComplete');
        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return postSyncAccount;
};

export type {PostSyncAccountData};
export default usePostSyncAccount;
