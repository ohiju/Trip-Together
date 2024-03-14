import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {Ad, AdView, MenuBox, Wrapper} from './MenusStyle';

const Menus = () => {
  return (
    <Wrapper>
      <AdView>
        <Ad source={imagePath.adh01} resizeMode="contain" />
      </AdView>
      <MenuBox></MenuBox>
    </Wrapper>
  );
};

export default Menus;
