import React, {Dispatch, SetStateAction} from 'react';
import {Row, Wrapper} from './AppKeyboardStyle';
import Key from './Key';

interface AppKeyboardProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  maxLength: number;
}

const AppKeyboard = ({value, setValue, maxLength}: AppKeyboardProps) => {
  const keys = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['', '0', 'back'],
  ];
  const onPress = (input: string) => {
    if (input === 'back') {
      setValue(value.slice(0, -1));
    } else if (input !== '') {
      if (value.length >= maxLength) return;
      setValue(value + input);
    }
  };

  return (
    <Wrapper>
      {keys.map(row => (
        <Row key={row.toString()}>
          {row.map(key => (
            <Key key={key} text={key} onPress={onPress} />
          ))}
        </Row>
      ))}
    </Wrapper>
  );
};

export default AppKeyboard;
