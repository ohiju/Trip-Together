import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParams} from '../interfaces/router/RootStackParams';
import Login from '../pages/Login';
import SocialLogin from '../pages/SocialLogin';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {true ? (
        <Stack.Screen name="Main" component={TabNavigator} />
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
