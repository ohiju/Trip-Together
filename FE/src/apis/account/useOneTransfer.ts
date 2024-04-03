import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert, ToastAndroid} from 'react-native';
import getToken from '../../hooks/getToken';
import {bankAccount} from '../../interfaces/bankAccount';
import {SyncStackParams} from '../../interfaces/router/myPage/SyncStackParams';
import useAxois from '../useAxois';

interface OneTransferData {
  account_uuid: string;
}

interface OneTransferResponse {
  status: number;
  message: string;
  data: {code1won: string};
}

const useOneTransfer = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();

  const oneTransferConfig = async (data: OneTransferData) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/sync-account/1wontransfer`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const oneTransfer = async (data: OneTransferData, selected: bankAccount) => {
    const result = await axios
      .request(await oneTransferConfig(data))
      .then((res: AxiosResponse<OneTransferResponse>) => {
        navigation.navigate('SyncConfirm', {selected});
        Alert.alert(`송금자: ${res.data.data.code1won}`);
        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return oneTransfer;
};

export type {OneTransferData};
export default useOneTransfer;
