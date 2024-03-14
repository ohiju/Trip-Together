import React from 'react';
import {defaultStyle} from '../../constants/AppButton';
import {AppButtonProps} from '../../interfaces/props/AppButton';
import {Btn, BtnText, BtnView} from './AppButtonStyle';

const AppButton = ({style = defaultStyle, text, onPress}: AppButtonProps) => {
  const bg1 = style.button?.bg1 ? style.button.bg1 : defaultStyle.button.bg1;
  const bg2 = style.button?.bg2 ? style.button.bg2 : defaultStyle.button.bg2;

  return (
    <BtnView>
      <Btn
        $width={
          style.button?.width ? style.button.width : defaultStyle.button.width
        }
        $borderR={
          style.button?.borderR
            ? style.button.borderR
            : defaultStyle.button.borderR
        }
        $padding={
          style.button?.padding
            ? style.button.padding
            : defaultStyle.button.padding
        }
        onPress={onPress}
        style={({pressed}) => ({
          backgroundColor: pressed ? bg2 : bg1,
        })}>
        <BtnText
          $color={
            style.font?.color ? style.font.color : defaultStyle.font.color
          }
          $size={style.font?.size ? style.font.size : defaultStyle.font?.size}>
          {text}
        </BtnText>
      </Btn>
    </BtnView>
  );
};

export default AppButton;
