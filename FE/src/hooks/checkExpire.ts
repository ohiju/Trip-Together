import {RootState} from '../store';
import {useAppSelector} from '../store/hooks';

const useCheckExpire = () => {
  const token = useAppSelector((state: RootState) => state.encrypt.auth.token);

  const checkExpire = () => {
    const now = Date.now() / 1000;
    const expiry = token.expires_in + token.created_at;

    return now < expiry;
  };

  return checkExpire;
};

export {useCheckExpire};
