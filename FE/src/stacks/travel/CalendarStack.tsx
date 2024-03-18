import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Calendar from '../../pages/travel/Calendar';
import Map from '../../components/travel/Map';

const CalendarStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="calendar_main"
        component={Calendar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="map"
        component={Map}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CalendarStack;
