import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import BankSvg from '../assets/icons/bank.svg';
import CardSvg from '../assets/icons/card.svg';
import WalletSvg from '../assets/icons/wallet.svg';
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
        asset={WalletSvg}
      />
    ),
    text: '내 지갑 관리',
    navigation: '',
  },
  {
    id: 1,
    icon: (
      <WithLocalSvg
        width={svgOptions.size}
        height={svgOptions.size}
        asset={CardSvg}
      />
    ),
    text: '내 카드 관리',
    navigation: '',
  },
  {
    id: 2,
    icon: (
      <WithLocalSvg
        width={svgOptions.size}
        height={svgOptions.size}
        asset={BankSvg}
      />
    ),
    text: '연동 계좌 관리',
    navigation: '',
  },
];

export {menus};
export type {menu};
