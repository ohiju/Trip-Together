import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert, ToastAndroid} from 'react-native';
import {bankAccount} from '../../assets/data/bankAccount';
import getToken from '../../hooks/getToken';
import {SyncStackParams} from '../../interfaces/router/myPage/SyncStackParams';
import useAxois from '../useAxois';

interface OneTransferData {
  account_uuid: string;
}

interface OneTransferResponse {
  status: number;
  message: string;
  data: null;
}

const useOneTransfer = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();

  const oneTransferConfig = async (data: OneTransferData) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/bank-accounts/1wontransfer`,
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
