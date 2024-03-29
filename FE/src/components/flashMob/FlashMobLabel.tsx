import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {dark, primary} from '../../constants/colors';

interface TabBarLabelProps {
  focused: Boolean;
}

const FlashMobLabel = ({focused}: TabBarLabelProps) => {
  return (
    <Text style={[style.text, {color: focused ? primary : dark}]}>번개</Text>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 10,
  },
});

export default FlashMobLabel;
