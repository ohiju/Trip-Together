import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Camera from '../components/common/Camera';
import {TravelStackParams} from '../interfaces/router/TripStackParams';
import Calendar from '../pages/travel/Calendar';
import GoogleMap from '../pages/travel/Map';
import PlanDetail from '../pages/travel/PlanDetail';
import PlaceInfoList from '../pages/common/PlaceInfoList';
import PlaceDetail from '../pages/common/PlaceDetail';
import Search from '../pages/travel/Search';
import Travel from '../pages/travel/Travel';
import TripTitle from '../pages/travel/TripTitle';
import KeywordSearch from '../pages/travel/KeywordSearch';
import AllTrip from '../pages/travel/AllTrip';
import NotYet from '../assets/data/NotYet';

const TravelStack = createNativeStackNavigator<TravelStackParams>();

const TravelNavigator = () => {
  return (
    <TravelStack.Navigator>
      <TravelStack.Screen
        name="travel_main"
        component={Travel}
        options={{
          title: '여행',
          headerRight: Camera,
        }}
      />
      <TravelStack.Screen
        name="AllTrip"
        component={AllTrip}
        options={{
          title: '',
        }}
      />
      <TravelStack.Group>
        <TravelStack.Screen
          name="planning"
          component={Search}
          options={{
            title: '',
          }}
        />
        <TravelStack.Screen
          name="calendar"
          component={Calendar}
          options={{
            title: '',
          }}
        />
        <TravelStack.Screen
          name="TripTitle"
          component={TripTitle}
          options={{
            title: '여행 제목',
            headerTitleAlign: 'center',
          }}
        />
      </TravelStack.Group>
      <TravelStack.Group>
        <TravelStack.Screen
          name="map"
          component={GoogleMap}
          options={{
            title: '',
          }}
        />
        <TravelStack.Screen
          name="KeywordSearch"
          component={KeywordSearch}
          options={{
            title: '',
          }}
        />
        <TravelStack.Screen
          name="plandetail"
          component={PlanDetail}
          options={{
            headerShown: false,
          }}
        />
        <TravelStack.Screen
          name="placeinfo"
          component={PlaceInfoList}
          options={{
            title: '',
            fullScreenGestureEnabled: true,
            customAnimationOnGesture: true,
            animation: 'slide_from_bottom',
          }}
        />
        <TravelStack.Screen
          name="placedetail"
          component={PlaceDetail}
          options={{
            title: '',
          }}
        />
      </TravelStack.Group>
      <TravelStack.Group>
        <TravelStack.Screen
          name="Insurance"
          component={NotYet}
          options={{
            title: '',
          }}
        />
        <TravelStack.Screen
          name="CurrencyChange"
          component={NotYet}
          options={{
            title: '',
          }}
        />
        <TravelStack.Screen
          name="Sales"
          component={NotYet}
          options={{
            title: '',
          }}
        />
      </TravelStack.Group>
    </TravelStack.Navigator>
  );
};

export default TravelNavigator;
