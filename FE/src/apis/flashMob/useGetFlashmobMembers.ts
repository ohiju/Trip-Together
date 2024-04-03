import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {flashmobInfo} from '../../interfaces/states/ChatState';
import {useAppDispatch} from '../../store/hooks';
import {setFlashMob} from '../../store/slices/chat';
import useAxois from '../useAxois';

interface GetFlashmobMembersParams {
  flashmob_id: number;
}

interface GetFlashmobMembersResponse {
  status: number;
  message: string;
  data: flashmobInfo;
}

const useGetFlashmobMembers = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const getFlashmobMembersConfig = async ({
    flashmob_id,
  }: GetFlashmobMembersParams) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/members`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getFlashmobMembers = async (params: GetFlashmobMembersParams) => {
    const result = await axios
      .request(await getFlashmobMembersConfig(params))
      .then((res: AxiosResponse<GetFlashmobMembersResponse>) => {
        dispatch(setFlashMob(res.data.data));
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return getFlashmobMembers;
};

export type {GetFlashmobMembersParams};
export default useGetFlashmobMembers;
