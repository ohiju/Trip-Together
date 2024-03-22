import React from 'react';
import {Wrapper, TitleInput} from './TripTitleStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TripTitleStackParams} from '../../interfaces/router/TripTitleStackParams';
import {font_light} from '../../constants/colors';
import AppButton from '../../components/common/AppButton';
import {BottomButton} from '../../constants/AppButton';

const TripTitle = () => {
  const navigation = useNavigation<NavigationProp<TripTitleStackParams>>();

  const handleSubmit = () => {
    navigation.navigate('map');
  };

  return (
    <Wrapper>
      <TitleInput
        placeholder="오희주님의 프랑스 여행 계획"
        placeholderTextColor={font_light}
      />
      <AppButton style={BottomButton} text="다음" onPress={handleSubmit} />
    </Wrapper>
  );
};

export default TripTitle;
