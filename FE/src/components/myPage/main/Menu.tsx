import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {menu as menuType} from '../../../constants/MyPageMenus';
import {dark} from '../../../constants/colors';
import {CaretView, Title, TitleView, Wrapper} from './MenuStyle';

interface MenuProps {
  menu: menuType;
}

const Menu = ({menu}: MenuProps) => {
  return (
    <Wrapper>
      <TitleView>
        {menu.icon}
        <Title>{menu.text}</Title>
      </TitleView>
      <CaretView>
        <WithLocalSvg
          width={20}
          height={20}
          fill={dark}
          asset={iconPath.card}
        />
      </CaretView>
    </Wrapper>
  );
};

export default Menu;
