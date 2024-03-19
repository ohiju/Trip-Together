import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

interface BasicRouteProps<T extends ParamListBase> {
  navigation?: NavigationProp<T>;
  route?: RouteProp<T, keyof T>;
}

export type {BasicRouteProps};
