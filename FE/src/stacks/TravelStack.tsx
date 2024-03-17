import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Travel from '../pages/travel/Main';
import {TravelStackParams} from '../interfaces/router/TravelStackParams';
import SearchStack from './travel/SearchStack';

const TravelStack = () => {
  const Stack = createNativeStackNavigator<TravelStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="travel_main"
        component={Travel}
        options={{
          title: '여행',
        }}
      />
      <Stack.Screen
        name="planning"
        component={SearchStack}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default TravelStack;
