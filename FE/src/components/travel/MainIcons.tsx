import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {imagePath} from '../../assets/images/imagePath';
import {bg_light} from '../../constants/colors';
import {TravelStackParams} from '../../interfaces/router/TripStackParams';

interface IPage {
  item: {num: number; color: string};
  style: ViewStyle;
}

const PageItem = styled.View<{color: string}>`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  padding-right: 20px;
`;

const IconBox = styled.View`
  align-items: center;
`;

const IconText = styled.Text`
  font-weight: bold;
`;

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: bg_light,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 9,
  },
});

const MainIcons = ({item, style}: IPage) => {
  const navigation = useNavigation<NavigationProp<TravelStackParams>>();

  return (
    <PageItem color={item.color} style={style}>
      {item.num === 1 ? (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('planning');
            }}
            style={styles.iconContainer}>
            <Image source={imagePath.trip} style={{width: 40, height: 40}} />
          </TouchableOpacity>
          <IconText>여행</IconText>
        </IconBox>
      ) : (
        <TouchableOpacity
          onPress={() => {
            // Handle onPress
          }}
          style={styles.iconContainer}>
          <Text>1</Text>
        </TouchableOpacity>
      )}
      {item.num === 1 ? (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              // Handle onPress
            }}
            style={styles.iconContainer}>
            <Image
              source={imagePath.insurance}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>보험</IconText>
        </IconBox>
      ) : (
        <TouchableOpacity
          onPress={() => {
            // Handle onPress
          }}
          style={styles.iconContainer}>
          <Text>1</Text>
        </TouchableOpacity>
      )}
      {item.num === 1 ? (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              // Handle onPress
            }}
            style={styles.iconContainer}>
            <Image
              source={imagePath.curexchange}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>환전</IconText>
        </IconBox>
      ) : (
        <TouchableOpacity
          onPress={() => {
            // Handle onPress
          }}
          style={styles.iconContainer}>
          <Text>1</Text>
        </TouchableOpacity>
      )}
      {item.num === 1 ? (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              // Handle onPress
            }}
            style={styles.iconContainer}>
            <Image
              source={imagePath.shopping}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>상품</IconText>
        </IconBox>
      ) : (
        <TouchableOpacity
          onPress={() => {
            // Handle onPress
          }}
          style={styles.iconContainer}>
          <Text>1</Text>
        </TouchableOpacity>
      )}
    </PageItem>
  );
};

export default MainIcons;
