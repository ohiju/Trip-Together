import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {menus} from '../../../constants/MyPageMenus';
import Menu from './Menu';
import {Ad, AdView, MenuBox, Wrapper} from './MenusStyle';

const Menus = () => {
  return (
    <Wrapper>
      <AdView>
        <Ad source={imagePath.adh01} resizeMode="cover" />
      </AdView>
      <MenuBox>
        {menus.map(menu => (
          <Menu key={menu.id} menu={menu} />
        ))}
      </MenuBox>
    </Wrapper>
  );
};

export default Menus;
