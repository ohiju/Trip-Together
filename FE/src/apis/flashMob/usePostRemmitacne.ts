import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {ChatStackParams} from '../../interfaces/router/flashMob/ChatMainStackParams';
import useAxois from '../useAxois';

interface PostRemmitanceData {
  pin_num: string;
}

interface PostRemmitanceParams {
  flashmob_id: number;
  settlement_id: number;
}

const usePostRemmitance = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<ChatStackParams>>();

  const postRemmitanceConfig = async (
    {flashmob_id, settlement_id}: PostRemmitanceParams,
    data: PostRemmitanceData,
  ) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/settlemetns/${settlement_id}`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const postRemmitacne = async (
    params: PostRemmitanceParams,
    data: PostRemmitanceData,
  ) => {
    const result = await axios
      .request(await postRemmitanceConfig(params, data))
      .then(() => {
        navigation.navigate('ChatRoom', {flashmob_id: params.flashmob_id});
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return postRemmitacne;
};

export type {PostRemmitanceData, PostRemmitanceParams};
export default usePostRemmitance;
