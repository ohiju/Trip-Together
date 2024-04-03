import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {ToastAndroid} from 'react-native';
import getToken from '../../hooks/getToken';
import {ChatStackParams} from '../../interfaces/router/flashMob/ChatMainStackParams';
import {attendee} from '../../interfaces/router/flashMob/SettlementStackParams';
import useAxois from '../useAxois';

interface PostSettlementData {
  currency_code: string;
  total_price: number;
  attendees_count: number;
  attendees: attendee[];
}

interface PostSettlementParams {
  flashmob_id: number;
}

interface PostSettlementResponse {
  status: number;
  message: string;
  data: null;
}

const usePostSettlement = () => {
  const axios = useAxois();
  const navigation = useNavigation<NavigationProp<ChatStackParams>>();

  const postSettlementConfig = async (
    {flashmob_id}: PostSettlementParams,
    data: PostSettlementData,
  ) => {
    const {access_token} = await getToken();
    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/flashmob/v1/flashmobs/${flashmob_id}/settlements`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const postSettlement = async (
    {flashmob_id}: PostSettlementParams,
    data: PostSettlementData,
  ) => {
    const result = await axios
      .request(await postSettlementConfig({flashmob_id}, data))
      .then((res: AxiosResponse<PostSettlementResponse>) => {
        navigation.navigate('ChatRoom', {flashmob_id});
        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return postSettlement;
};

export type {PostSettlementData, PostSettlementParams};
export default usePostSettlement;
