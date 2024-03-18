import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Map from '../../components/travel/Map';

const MapStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
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

export default MapStack;
