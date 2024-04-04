import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NotYet from '../assets/data/NotYet';
import Camera from '../components/common/Camera';
import MapHeaderRight from '../components/travel/MapHeaderRight';
import {TravelStackParams} from '../interfaces/router/TripStackParams';
import PlaceDetail from '../pages/common/PlaceDetail';
import PlaceInfoList from '../pages/common/PlaceInfoList';
import AllTrip from '../pages/travel/AllTrip';
import Calendar from '../pages/travel/Calendar';
import KeywordSearch from '../pages/travel/KeywordSearch';
import GoogleMap from '../pages/travel/Map';
import PlanDetail from '../pages/travel/PlanDetail';
import Search from '../pages/travel/Search';
import Travel from '../pages/travel/Travel';
import TripTitle from '../pages/travel/TripTitle';

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
          title: '내 계획',
          headerTitleAlign: 'center',
        }}
      />
      <TravelStack.Group
        screenOptions={{title: '여행 계획', headerTitleAlign: 'center'}}>
        <TravelStack.Screen name="planning" component={Search} />
        <TravelStack.Screen name="calendar" component={Calendar} />
        <TravelStack.Screen name="TripTitle" component={TripTitle} />
      </TravelStack.Group>
      <TravelStack.Group
        screenOptions={{title: '', headerTitleAlign: 'center'}}>
        <TravelStack.Screen
          name="map"
          component={GoogleMap}
          options={{
            title: '지도 보기',
            headerRight: MapHeaderRight,
          }}
        />
        <TravelStack.Screen
          name="KeywordSearch"
          component={KeywordSearch}
          options={{
            title: '검색 하기',
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
            title: '목록 보기',
            fullScreenGestureEnabled: true,
            customAnimationOnGesture: true,
            animation: 'slide_from_bottom',
          }}
        />
        <TravelStack.Screen
          name="placedetail"
          component={PlaceDetail}
          options={{
            title: '상세 보기',
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
