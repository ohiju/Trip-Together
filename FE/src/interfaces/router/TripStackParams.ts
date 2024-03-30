import {ParamListBase} from '@react-navigation/native';

interface TravelStackParams extends ParamListBase {
  travel_main: undefined;
  planning: undefined;
  calendar: undefined;
  TripTitle: undefined;

  map: undefined;
  plandetail: undefined;
  placeinfo: {theme: string};
  placedetail: {theme: string};
}

export type {TravelStackParams};
