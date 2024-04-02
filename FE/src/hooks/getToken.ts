import EncryptedStorage from 'react-native-encrypted-storage';
import {token as tokenState} from '../interfaces/states/tokenState';

const getToken = async () => {
  const token = await EncryptedStorage.getItem('token');
  if (!token) return {access_token: '', expires_in: 0, created_at: 0};
  const {access_token, expires_in, created_at}: tokenState = JSON.parse(token);

  return {access_token, expires_in, created_at};
};

export default getToken;
