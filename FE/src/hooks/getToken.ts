import EncryptedStorage from 'react-native-encrypted-storage';
import {token as tokenState} from '../interfaces/states/tokenState';

const getToken = async () => {
  const token = await EncryptedStorage.getItem('token');
  if (!token) throw new Error('EncryptedStorageError: 토큰이 없습니다.');
  const {access_token, expires_in, created_at}: tokenState = JSON.parse(token);

  return {access_token, expires_in, created_at};
};

export default getToken;
