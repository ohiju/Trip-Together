import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Search from '../../pages/travel/Search';
import CalendarStack from './CalendarStack';

const SearchStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="planning_main"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="calendar"
        component={CalendarStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
