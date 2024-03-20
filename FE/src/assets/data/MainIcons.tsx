import React from 'react';
import styled from 'styled-components/native';
import {
  ViewStyle,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {bg_lightgray} from '../../constants/colors';
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

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: bg_lightgray,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
});

const Page = ({item, style}: IPage) => {
  const navigation = useNavigation<NavigationProp<TravelStackParams>>();

  return (
    <PageItem color={item.color} style={style}>
      {item.num === 1 ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('planning');
          }}
          style={styles.iconContainer}>
          <Image
            source={require('../images/trip.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            // Handle onPress
          }}
          style={styles.iconContainer}>
          <Text>1</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          // Handle onPress
        }}
        style={styles.iconContainer}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Handle onPress
        }}
        style={styles.iconContainer}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Handle onPress
        }}
        style={styles.iconContainer}>
        <Text>1</Text>
      </TouchableOpacity>
    </PageItem>
  );
};

export default Page;
