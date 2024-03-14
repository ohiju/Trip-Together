import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import UserSvg from '../../assets/icons/user.svg';
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
      asset={UserSvg}
    />
  );
};

export default TabBarIcon;
