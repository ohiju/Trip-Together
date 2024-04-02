import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import getToken from '../hooks/getToken';
import {RootStackParams} from '../interfaces/router/RootStackParams';
import Login from '../pages/Login';
import PinAuth from '../pages/PinAuth';
import SocialLogin from '../pages/SocialLogin';
import {RootState} from '../store';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {setLogin} from '../store/slices/user';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  const isLogin = useAppSelector((state: RootState) => state.user.isLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkLogin = async () => {
      const {access_token} = await getToken();

      if (access_token) {
        dispatch(setLogin(true));
      } else {
        dispatch(setLogin(false));
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
