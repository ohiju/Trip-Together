import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {imagePath} from '../../assets/images/imagePath';
import {bg_light} from '../../constants/colors';
import {TabParams} from '../../interfaces/router/TabParams';

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
  const navigation = useNavigation<NavigationProp<TabParams>>();

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
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Insurance');
            }}
            style={styles.iconContainer}>
            <Image
              source={imagePath.insurance}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>보험</IconText>
        </IconBox>
      )}
      {item.num === 1 ? (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AllTrip');
            }}
            style={styles.iconContainer}>
            <Image
              source={require('../../assets/images/writing.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>계획</IconText>
        </IconBox>
      ) : (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Insurance');
            }}
            style={styles.iconContainer}>
            <Image
              source={require('../../assets/images/calculator.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>계산</IconText>
        </IconBox>
      )}
      {item.num === 1 ? (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CurrencyChange');
            }}
            style={styles.iconContainer}>
            <Image
              source={imagePath.exchangecur}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>환전</IconText>
        </IconBox>
      ) : (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Insurance');
            }}
            style={styles.iconContainer}>
            <Image
              source={require('../../assets/images/saving.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>적금</IconText>
        </IconBox>
      )}
      {item.num === 1 ? (
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sales');
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
        <IconBox>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sales');
            }}
            style={styles.iconContainer}>
            <Image
              source={require('../../assets/images/myreport.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <IconText>마이</IconText>
        </IconBox>
      )}
    </PageItem>
  );
};

export default MainIcons;
