import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootBeforeLoginStackParams} from '../router/RootStackParams';

interface LoginProps {
  navigation: NativeStackNavigationProp<RootBeforeLoginStackParams>;
  route: RouteProp<
    RootBeforeLoginStackParams,
    keyof RootBeforeLoginStackParams
  >;
}

export type {LoginProps};
