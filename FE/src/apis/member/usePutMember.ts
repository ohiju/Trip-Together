import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import {
  ProfileMainProps,
  ProfileStackParams,
} from '../../interfaces/router/myPage/ProfileStackParams';
import {member} from '../../interfaces/states/UserState';
import {useAppDispatch} from '../../store/hooks';
import {putUser} from '../../store/slices/user';
import useAxois from '../useAxois';

interface PutMemberData {
  image_url: string;
  nickname: string;
  description: string;
}

interface PutMemberResponse {
  status: number;
  message: string;
  data: member;
}

const usePutMember = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<ProfileStackParams>>();

  const putMemberConfig = async (data: PutMemberData) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members`,
      method: 'patch',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const putMember = async (data: PutMemberData, props: ProfileMainProps) => {
    const result = axios
      .request(await putMemberConfig(data))
      .then((res: AxiosResponse<PutMemberResponse>) => {
        dispatch(putUser(res.data.data));
        navigation.navigate('ProfileMain', props);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return putMember;
};

export type {PutMemberData};
export default usePutMember;
