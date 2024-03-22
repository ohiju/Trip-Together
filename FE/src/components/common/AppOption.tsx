import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {Wrapper} from './AppOptionStyle';

interface AppOptionProps {
  option: JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
}

const AppOption = ({option, onPress}: AppOptionProps) => {
  return <Wrapper onPress={onPress}>{option}</Wrapper>;
};

export default AppOption;
