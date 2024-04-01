import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert, ToastAndroid} from 'react-native';
import getToken from '../../hooks/getToken';
import {
  PinAuthProps,
  RootStackParams,
} from '../../interfaces/router/RootStackParams';
import useAxois from '../useAxois';
import {PostSyncAccountData} from './usePostSyncAccount';

interface OneVerifyData {
  account_uuid: string;
  code: string;
}

interface OneVerifyResponse {
  status: number;
  message: string;
  data: null;
}

const useOneVerify = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const oneVerifyConfig = async (data: OneVerifyData) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/sync-account/1wonverify`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const oneVerify = async (
    data: OneVerifyData,
    pinData: PostSyncAccountData,
  ) => {
    const result = await axios
      .request(await oneVerifyConfig(data))
      .then((res: AxiosResponse<OneVerifyResponse>) => {
        const mainAccount = (is_main: number) => {
          const props: PinAuthProps = {
            pinData: {
              ...pinData,
              is_main,
            },
            api: 'postSyncAccount',
          };
          navigation.navigate('PinAuth', props);
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
        };
        Alert.alert(res.data.message, '이 계좌를 주 계좌로 등록하시겠습니까?', [
          {
            text: '예',
            onPress: () => mainAccount(1),
          },
          {
            text: '아니오',
            onPress: () => mainAccount(0),
          },
        ]);
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return oneVerify;
};

export type {OneVerifyData};
export default useOneVerify;
