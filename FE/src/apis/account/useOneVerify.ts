import {TRIP_API_URL} from '@env';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';
import usePostSyncAccount, {PostSyncAccountData} from './usePostSyncAccount';

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
    account: PostSyncAccountData,
  ) => {
    const result = await axios
      .request(await oneVerifyConfig(params, data))
      .then(() => {
        Alert.alert(
          '계좌 인증 성공!',
          '이 계좌를 주 계좌로 등록하시겠습니까?',
          [
            {
              text: '예',
              onPress: () => postSyncAccount({...account, is_main: 1}),
            },
            {
              text: '아니오',
              onPress: () => postSyncAccount(account),
            },
          ],
        );
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return oneVerify;
};

export default useOneVerify;
