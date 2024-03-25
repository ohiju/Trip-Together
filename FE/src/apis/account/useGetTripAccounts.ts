import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {tripAccount} from '../../interfaces/states/UserState';
import {useAppDispatch} from '../../store/hooks';
import {setTripAccounts} from '../../store/slices/user';
import useAxois from '../useAxois';

interface GetTripAccountsResponse {
  trip_accounts: tripAccount[];
}

const useGetTripAccounts = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const getTripAccountsConfig = async () => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/account/v1/trip-account/trip-accounts`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getTripAccounts = async () => {
    const result = await axios
      .request(await getTripAccountsConfig())
      .then((res: AxiosResponse<GetTripAccountsResponse>) => {
        dispatch(setTripAccounts(res.data.trip_accounts));
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return getTripAccounts;
};

export default useGetTripAccounts;
