import React from 'react';
import {Btn, BtnText, BtnView} from './ButtonMiddleStyle';

interface ButtonMiddleProps {
  bg1: string;
  bg2: string;
  color: string;
  text: string;
  onPress: () => void;
}

const ButtonMiddle = ({bg1, bg2, color, text, onPress}: ButtonMiddleProps) => {
  return (
    <BtnView>
      <Btn
        onPress={onPress}
        style={({pressed}) => ({
          backgroundColor: pressed ? bg2 : bg1,
        })}>
        <BtnText $color={color}>{text}</BtnText>
      </Btn>
    </BtnView>
  );
};

export default ButtonMiddle;
