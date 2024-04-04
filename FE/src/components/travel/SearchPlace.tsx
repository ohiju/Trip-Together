import React from 'react';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TravelStackParams} from '../../interfaces/router/TravelStackParams';

const SearchButton = () => {
  const navigation = useNavigation<NavigationProp<TravelStackParams>>();

  const handleOnPress = () => {
    navigation.navigate('KeywordSearch');
  };

  return (
    <ButtonContainer onPress={handleOnPress}>
      <PlaceholderText>어디로 여행을 떠나시나요?</PlaceholderText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  width: 92%;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding-left: 15px;
  padding-vertical: 9px;
  padding-horizontal: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  shadow-color: #6164bb;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const PlaceholderText = styled.Text`
  font-size: 16px;
  font-family: 'spoqaR';
  color: #6c6c6e;
`;

export default SearchButton;
