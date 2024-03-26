import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import {ToastAndroid} from 'react-native';
import getToken from '../../hooks/getToken';
import {RootStackParams} from '../../interfaces/router/RootStackParams';
import {SyncConfirmProps} from '../../interfaces/router/myPage/SyncStackParams';
import useAxois from '../useAxois';
import usePostSyncAccount from './usePostSyncAccount';

interface OneVerifyParams {
  account_num: string;
  code: string;
}

interface OneVerifyData {
  account_uuid: string;
  code: string;
}

const useOneVerify = () => {
  const axios = useAxois();
  const postSyncAccount = usePostSyncAccount();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const oneVerifyConfig = async (
    params: OneVerifyParams,
    data: OneVerifyData,
  ) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/bank-accounts/1wonverify`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params,
      data,
    };

    return axiosConfig;
  };

  const oneVerify = async (
    params: OneVerifyParams,
    data: OneVerifyData,
    pinData: SyncConfirmProps,
  ) => {
    const result = await axios
      .request(await oneVerifyConfig(params, data))
      .then(() => {
        navigation.navigate('PinAuth', {data: pinData, api: postSyncAccount});
        ToastAndroid.show('계좌 인증 성공!', ToastAndroid.SHORT);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return oneVerify;
};

export default useOneVerify;
