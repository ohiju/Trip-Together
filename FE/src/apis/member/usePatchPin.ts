import {TRIP_API_URL} from '@env';
import {AxiosResponse, RawAxiosRequestConfig} from 'axios';
import getToken from '../../hooks/getToken';
import useAxois from '../useAxois';

interface PatchPinData {
  pre_pin_num: string;
  new_pin_num: string;
  new_pin_num_check: string;
}

const usePatchPin = () => {
  const axios = useAxois();

  const patchPinConfig = async (data: PatchPinData) => {
    const {access_token} = await getToken();

    const axiosConfig: RawAxiosRequestConfig = {
      url: `${TRIP_API_URL}/api/member/v1/members/pin`,
      method: 'patch',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data,
    };

    return axiosConfig;
  };

  const patchPin = async (data: PatchPinData) => {
    const result = await axios
      .request(await patchPinConfig(data))
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosResponse) => {
        console.error(err);
      });

    return result;
  };

  return patchPin;
};

export type {PatchPinData};
export default usePatchPin;
