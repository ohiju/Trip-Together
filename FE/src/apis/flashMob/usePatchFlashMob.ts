import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import getToken from '../../hooks/getToken';
import {flashmobInfo} from '../../interfaces/states/ChatState';
import {useAppDispatch} from '../../store/hooks';
import {setFlashMob} from '../../store/slices/chat';
import useAxois from '../useAxois';

interface PatchFlashMobParams {
  flashmob_id: number;
  member_id: number;
}

interface PatchFlashMobData {
  status: 'REFUSE_UNCHECK' | 'ATTEND';
}

interface PatchFlashMobResponse {
  status: number;
  message: string;
  data: flashmobInfo;
}

const usePatchFlashMob = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const patchFlashMobConfig = async (
    {flashmob_id, member_id}: PatchFlashMobParams,
    data: PatchFlashMobData,
  ) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/${member_id}`,
      method: 'patch',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const patchFlashMob = async (
    params: PatchFlashMobParams,
    data: PatchFlashMobData,
  ) => {
    const result = await axios
      .request(await patchFlashMobConfig(params, data))
      .then((res: AxiosResponse<PatchFlashMobResponse>) => {
        dispatch(setFlashMob(res.data.data));
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return patchFlashMob;
};
export type {
  PatchFlashMobData,
  PatchFlashMobData,
  PatchFlashMobParams,
  PatchFlashMobParams,
};
export default usePatchFlashMob;
