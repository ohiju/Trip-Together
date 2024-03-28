import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import getToken from '../../hooks/getToken';
import {member} from '../../interfaces/states/UserState';
import {useAppDispatch} from '../../store/hooks';
import {setMember} from '../../store/slices/user';
import useAxois from '../useAxois';

interface GetMemberParams {
  member_id: number;
}

interface GetMemberResponse {
  status: number;
  message: string;
  data: member;
}

const useGetMember = () => {
  const axios = useAxois();
  const dispatch = useAppDispatch();

  const getMemberConfig = async ({member_id}: GetMemberParams) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members/${member_id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    return axiosConfig;
  };

  const getMember = async (params: GetMemberParams) => {
    const result = await axios
      .request(await getMemberConfig(params))
      .then((res: AxiosResponse<GetMemberResponse>) => {
        console.log(res.data);

        dispatch(setMember(res.data.data));
      })
      .catch((err: AxiosError) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return getMember;
};

export default useGetMember;
