import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../assets/icons/iconPath';
import {dark} from './colors';

interface menu {
  id: number;
  icon: React.JSX.Element;
  text: string;
  navigation: any;
}

const svgOptions = {
  size: 24,
  color: dark,
};

const menus: menu[] = [
  {
    id: 0,
    icon: (
      <WithLocalSvg
        width={svgOptions.size}
        height={svgOptions.size}
        asset={iconPath.wallet}
      />
    ),
    text: '내 지갑 관리',
    navigation: 'WalletManage',
  },
  {
    id: 1,
    icon: (
      <WithLocalSvg
        width={svgOptions.size}
        height={svgOptions.size}
        asset={iconPath.card}
      />
    ),
    text: '내 카드 관리',
    navigation: 'CardManage',
  },
  {
    id: 2,
    icon: (
      <WithLocalSvg
        width={svgOptions.size}
        height={svgOptions.size}
        asset={iconPath.bank}
      />
    ),
    text: '연동 계좌 관리',
    navigation: 'SyncManage',
  },
];

export {menus};
export type {menu};
