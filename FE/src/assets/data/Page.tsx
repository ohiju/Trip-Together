import React from 'react';
import styled from 'styled-components/native';
import {ViewStyle} from 'react-native';

interface IPage {
  item: {num: number; color: string};
  style: ViewStyle;
}

const PageItem = styled.View<{color: string}>`
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const PageNum = styled.Text``;

const Page = ({item, style}: IPage) => {
  return (
    <PageItem color={item.color} style={style}>
      <PageNum>{item.num}</PageNum>
    </PageItem>
  );
};

export default Page;
