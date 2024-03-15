import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface BasicRouteProps<T extends ParamListBase> {
  navigation: NativeStackNavigationProp<T>;
  route: RouteProp<T, keyof T>;
}

export type {BasicRouteProps};
