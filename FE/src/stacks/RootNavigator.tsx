import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import getToken from '../hooks/getToken';
import {RootStackParams} from '../interfaces/router/RootStackParams';
import {user as userType} from '../interfaces/states/UserState';
import Login from '../pages/Login';
import PinAuth from '../pages/PinAuth';
import SocialLogin from '../pages/SocialLogin';
import {RootState} from '../store';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {deleteUser, setUser} from '../store/slices/user';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  const isLogin = useAppSelector((state: RootState) => state.user.isLogin);
  const appUser = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkLogin = async () => {
      const {access_token} = await getToken();
      const userStr = await EncryptedStorage.getItem('user');
      if (!userStr) return;
      const user: userType | any = JSON.parse(userStr);

      if (access_token && user.member_id) {
        dispatch(setUser(user));
      } else if (user.member_id !== appUser.member_id) {
        await EncryptedStorage.clear();
        dispatch(deleteUser(true));
      }
    };

    checkLogin();
  }, [isLogin]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen
            name="PinAuth"
            component={PinAuth}
            options={{title: '핀 인증', headerShown: true}}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SocialLogin" component={SocialLogin} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
