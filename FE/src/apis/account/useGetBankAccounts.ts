import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import getToken from '../../hooks/getToken';
import {bankAccount} from '../../interfaces/bankAccount';
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
        console.log(res.data);

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
