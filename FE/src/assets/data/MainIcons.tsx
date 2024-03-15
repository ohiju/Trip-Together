import React from 'react';
import styled from 'styled-components/native';
import {ViewStyle, Text} from 'react-native';
import {primary} from '../../constants/colors';

interface IPage {
  item: {num: number; color: string};
  style: ViewStyle;
}

const PageItem = styled.View<{color: string}>`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: row;
`;

const Icon = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${primary};
  justify-content: center;
  margin: 10px 10px;
  align-items: center;
  border-radius: 20px;
`;

const Page = ({item, style}: IPage) => {
  return (
    <PageItem color={item.color} style={style}>
      <Icon>
        <Text>1</Text>
      </Icon>
      <Icon>
        <Text>1</Text>
      </Icon>
      <Icon>
        <Text>1</Text>
      </Icon>
      <Icon>
        <Text>1</Text>
      </Icon>
    </PageItem>
  );
};

export default Page;
