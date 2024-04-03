import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import getToken from '../../hooks/getToken';
import {
  ProfileMainProps,
  ProfileStackParams,
} from '../../interfaces/router/myPage/ProfileStackParams';
import {member, user as userType} from '../../interfaces/states/UserState';
import {useAppDispatch} from '../../store/hooks';
import {putUser} from '../../store/slices/user';
import useAxois from '../useAxois';
import useLogout from './useLogout';

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
  const logout = useLogout();
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
      .then(async (res: AxiosResponse<PutMemberResponse>) => {
        await EncryptedStorage.getItem('user')
          .then(item => {
            if (!item) {
              logout();
              throw new Error('유저 정보가 없습니다.');
            }
            const user: userType = JSON.parse(item);
            const newUser: userType = {
              ...(user as userType),
              ...res.data.data,
            };
            return JSON.stringify(newUser);
          })
          .then(async newUser => {
            await EncryptedStorage.setItem('user', newUser);
          });
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
