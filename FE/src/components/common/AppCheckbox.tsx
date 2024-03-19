import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import CheckSvg from '../../assets/icons/check.svg';
import {defaultStyle} from '../../constants/AppCheckbox';
import {AppCheckboxProps} from '../../interfaces/props/AppCheckbox';
import {Wrapper} from './AppCheckboxStyle';

const AppCheckbox = ({
  style = defaultStyle,
  isChecked,
  onPress,
}: AppCheckboxProps) => {
  const bg1 = style.bg1 ? style.bg1 : defaultStyle.bg1;
  const bg2 = style.bg2 ? style.bg2 : defaultStyle.bg2;
  const size = style.size ? style.size : defaultStyle.size;
  const thickness = style.thickness ? style.thickness : defaultStyle.thickness;
  const hitSlop = style.hitSlop ? style.hitSlop : defaultStyle.hitSlop;

  return (
    <Wrapper onPress={onPress} hitSlop={hitSlop}>
      <WithLocalSvg
        width={size}
        height={size}
        strokeWidth={thickness}
        stroke={isChecked ? bg2 : bg1}
        asset={CheckSvg}
      />
    </Wrapper>
  );
};

export default AppCheckbox;
