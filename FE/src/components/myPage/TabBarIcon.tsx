import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../assets/icons/iconPath';
import {dark, primary} from '../../constants/colors';

interface TabBarIconProps {
  focused: boolean;
}

const TabBarIcon = ({focused}: TabBarIconProps) => {
  return (
    <WithLocalSvg
      width={20}
      height={20}
      stroke={focused ? primary : dark}
      asset={iconPath.user}
    />
  );
};

export default TabBarIcon;
