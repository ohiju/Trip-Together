import React from 'react';
import {bg_light, bg_main} from '../../constants/colors';
import {KeyText, Wrapper} from './KeyStyle';

interface KeyProps {
  text: string;
  onPress: (input: string) => void;
}

const Key = ({text, onPress}: KeyProps) => {
  return (
    <Wrapper
      onPress={() => onPress(text)}
      style={({pressed}) => ({
        backgroundColor: text && pressed ? bg_main : bg_light,
      })}>
      <KeyText>{text}</KeyText>
    </Wrapper>
  );
};

export default Key;
