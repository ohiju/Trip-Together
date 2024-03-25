import axios from 'axios';

const useAxois = () => {
  const instance = axios.create();

  return instance;
};

export default useAxois;
