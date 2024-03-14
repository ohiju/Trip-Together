import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import CaretSvg from '../../../assets/icons/caret.svg';
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
        <WithLocalSvg width={20} height={20} fill={dark} asset={CaretSvg} />
      </CaretView>
    </Wrapper>
  );
};

export default Menu;
