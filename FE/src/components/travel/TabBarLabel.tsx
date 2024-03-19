import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {dark, primary} from '../../constants/colors';

interface TabBarLabelProps {
  focused: Boolean;
}

const TravelLabel = ({focused}: TabBarLabelProps) => {
  return (
    <Text style={[style.text, {color: focused ? primary : dark}]}>여행</Text>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 10,
  },
});

export default TravelLabel;
