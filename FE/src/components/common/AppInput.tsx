import React, {forwardRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';

const AppInput = forwardRef<TextInput, TextInputProps>((props, ref) => (
  <TextInput
    ref={ref}
    value={props.value}
    onChange={props.onChange}
    onChangeText={props.onChangeText}
    onFocus={props.onFocus}
    placeholder={props.placeholder}
    style={props.style}
  />
));

export default AppInput;
