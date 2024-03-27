import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import {ToastAndroid} from 'react-native';
import {bankAccount} from '../../assets/data/bankAccount';
import getToken from '../../hooks/getToken';
import {SyncStackParams} from '../../interfaces/router/myPage/SyncStackParams';
import useAxois from '../useAxois';

interface OneTransferParams {
  account_num: string;
  code: string;
}

interface OneTransferData {
  account_uuid: string;
}

const useOneTransfer = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();

  const oneTransferConfig = async (
    params: OneTransferParams,
    data: OneTransferData,
  ) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/bank-accounts/1wontransfer`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params,
      data,
    };

    return axiosConfig;
  };

  const oneTransfer = async (
    params: OneTransferParams,
    data: OneTransferData,
    selected: bankAccount,
  ) => {
    const result = await axios
      .request(await oneTransferConfig(params, data))
      .then(() => {
        navigation.navigate('SyncConfirm', {selected});
        ToastAndroid.show('1원이 송금되었습니다.', ToastAndroid.SHORT);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return oneTransfer;
};

export default useOneTransfer;
