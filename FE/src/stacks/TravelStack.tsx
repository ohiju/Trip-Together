import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Travel from '../pages/travel/Travel';
import {TravelStackParams} from '../interfaces/router/TravelStackParams';
import Search from '../pages/travel/Search';
import Calendar from '../pages/travel/Calendar';
import TripTitle from '../pages/travel/TripTitle';
import GoogleMap from '../pages/travel/Map';

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
      <Stack.Group>
        <Stack.Screen
          name="planning"
          component={Search}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="calendar"
          component={Calendar}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="TripTitle"
          component={TripTitle}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="map"
          component={GoogleMap}
          options={{
            title: '',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TravelStack;
