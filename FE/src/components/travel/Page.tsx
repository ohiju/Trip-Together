import React from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {imagePath} from '../../assets/images/imagePath';

interface IPage {
  item: {num: number; color: string};
  style: ViewStyle;
}

const PageItem = styled.View<{color: string}>`
  position: relative;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

const PageImage = styled.Image`
  position: absolute;
  width: 180px;
  height: 200px;
  border-radius: 10px;
`;

const PageCommercial = styled.Text`
  font-size: 20px;
  z-index: 1;
  color: white;
`;

const DarkOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const imageMap: {[key: number]: any} = {
  1: imagePath.europe,
  2: imagePath.europe2,
  3: imagePath.europe3,
  4: imagePath.europe4,
  5: imagePath.europe5,
};

const Page = ({item, style}: IPage) => {
  const selectedImage = imageMap[item.num];

  return (
    <PageItem color={item.color} style={style}>
      <PageCommercial>10% 특별 할인</PageCommercial>
      <PageImage source={selectedImage} />
      <DarkOverlay />
    </PageItem>
  );
};

export default Page;
