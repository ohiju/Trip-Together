import axios, {AxiosError, AxiosResponse, RawAxiosRequestConfig} from 'axios';

const useRefresh = () => {
  const refreshParams = () => {
    const axiosParams: RawAxiosRequestConfig = {};

    return axiosParams;
  };

  const refresh = async () => {
    const result = await axios
      .request(refreshParams())
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });

    return result;
  };

  return refresh;
};

export default useRefresh;
