import React, {useState} from 'react';
import {
  Wrapper,
  TitleContainer,
  TitleInput,
  TitleLength,
  TitleLengthText,
} from './TripTitleStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TripTitleStackParams} from '../../interfaces/router/TripTitleStackParams';
import AppButton from '../../components/common/AppButton';
import {BottomButton} from '../../constants/AppButton';

const TripTitle = () => {
  const navigation = useNavigation<NavigationProp<TripTitleStackParams>>();

  const [title, setTitle] = useState('오희주님의 프랑스 여행 계획');

  const handleSubmit = () => {
    navigation.navigate('map', {title});
  };

  return (
    <Wrapper>
      <TitleContainer>
        <TitleInput
          placeholder="오희주님의 프랑스 여행 계획"
          value={title}
          onChangeText={setTitle}
        />
        <TitleLength>
          <TitleLengthText>{title.length}/15</TitleLengthText>
        </TitleLength>
      </TitleContainer>
      <AppButton style={BottomButton} text="다음" onPress={handleSubmit} />
    </Wrapper>
  );
};

export default TripTitle;
