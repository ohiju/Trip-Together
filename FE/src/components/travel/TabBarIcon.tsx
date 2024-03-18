import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import PlaneSvg from '../../assets/icons/plane.svg';
import {dark, primary} from '../../constants/colors';

interface TabBarIconProps {
  focused: boolean;
}

const TravelIcon = ({focused}: TabBarIconProps) => {
  return (
    <WithLocalSvg
      width={20}
      height={20}
      stroke={focused ? primary : dark}
      asset={PlaneSvg}
    />
  );
};

export default TravelIcon;
