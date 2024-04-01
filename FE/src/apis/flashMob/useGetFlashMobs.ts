import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {flashmob} from '../../interfaces/states/ChatState';
import {useAppDispatch} from '../../store/hooks';
import {setFlashMobs} from '../../store/slices/chat';
import useAxois from '../useAxois';

interface GetFlashMobsResponse {
  status: number;
  message: string;
  data: {
    flashmobs: flashmob[];
  };
}

const useGetFlashMobs = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const getFlashMobsConfig = async () => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getFlashMobs = async () => {
    const result = await axios
      .request(await getFlashMobsConfig())
      .then((res: AxiosResponse<GetFlashMobsResponse>) => {
        dispatch(setFlashMobs(res.data.data.flashmobs));
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return getFlashMobs;
};

export default useGetFlashMobs;
