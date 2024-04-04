import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import getToken from '../../hooks/getToken';
import {bankAccount} from '../../interfaces/bankAccount';
import {TabParams} from '../../interfaces/router/TabParams';
import {useAppDispatch} from '../../store/hooks';
import {setBankAccounts} from '../../store/slices/account';
import useAxois from '../useAxois';

interface GetBankAccountsResponse {
  status: number;
  message: string;
  data: {
    accounts: bankAccount[];
  };
}

const useGetBankAccounts = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<TabParams>>();

  const getBankAccountsConfig = async () => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/sync-account/bank-accounts`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getBankAccounts = async () => {
    const result = await axios
      .request(await getBankAccountsConfig())
      .then((res: AxiosResponse<GetBankAccountsResponse>) => {
        if (!res.data.data.accounts.length) {
          Alert.alert('은행 계좌가 없습니다.');
          navigation.navigate('MyMain');
        }

        dispatch(setBankAccounts(res.data.data.accounts));
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return getBankAccounts;
};

export default useGetBankAccounts;
