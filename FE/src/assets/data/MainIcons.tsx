import React from 'react';
import styled from 'styled-components/native';
import {ViewStyle, Text} from 'react-native';
import {primary} from '../../constants/colors';
import {Button} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TravelStackParams} from '../../interfaces/router/TravelStackParams';

interface IPage {
  item: {num: number; color: string};
  style: ViewStyle;
}

const PageItem = styled.View<{color: string}>`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
`;

const Icon = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${primary};
  justify-content: center;
  margin: 10px 10px;
  align-items: center;
  border-radius: 10px;
`;

const Page = ({item, style}: IPage) => {
  const navigation = useNavigation<NavigationProp<TravelStackParams>>();

  return (
    <PageItem color={item.color} style={style}>
      <Icon>
        <Button
          title="Plan"
          onPress={() => {
            navigation.navigate('planning');
          }}
        />
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
