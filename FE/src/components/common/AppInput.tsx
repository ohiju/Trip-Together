import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

const AppInput = React.forwardRef<TextInput, TextInputProps>((props, ref) => (
  <TextInput
    ref={ref}
    value={props.value}
    onChange={props.onChange}
    onFocus={props.onFocus}
    placeholder={props.placeholder}
    style={props.style}
  />
));

export default AppInput;
