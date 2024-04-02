import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import getToken from '../hooks/getToken';
import {RootStackParams} from '../interfaces/router/RootStackParams';
import Login from '../pages/Login';
import PinAuth from '../pages/PinAuth';
import SocialLogin from '../pages/SocialLogin';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const {access_token} = await getToken();
      if (access_token) {
        setIsLogin(true);
      }
    };

    checkLogin();
  }, []);

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
