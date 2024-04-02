import {TRIP_API_URL} from '@env';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import getToken from '../../hooks/getToken';
import {useAppDispatch} from '../../store/hooks';
import {deleteUser} from '../../store/slices/user';
import useAxois from '../useAxois';

const useLogout = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const logoutConfig = async () => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members/logout`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const logout = async () => {
    const result = await axios
      .request(await logoutConfig())
      .then(async () => {
        await EncryptedStorage.clear();
        dispatch(deleteUser(true));
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return logout;
};

export default useLogout;
