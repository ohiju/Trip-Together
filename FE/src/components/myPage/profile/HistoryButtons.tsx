import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import HistoryButton from './HistoryButton';
import {
  FlashHistoryView,
  TripHistoryView,
  Wrapper,
} from './HistoryButtonsStyle';

const HistoryButtons = () => {
  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const handleToProfileTrip = () => {
    navigation.navigate('ProfileTrip');
  };
  const handleToProfileFlashMob = () => {
    navigation.navigate('ProfileFlashMob');
  };

  return (
    <Wrapper>
      <TripHistoryView>
        <HistoryButton
          source="plane"
          text="내 여행"
          onPress={handleToProfileTrip}
        />
      </TripHistoryView>
      <FlashHistoryView>
        <HistoryButton
          source="lightning"
          text="내 번개"
          onPress={handleToProfileFlashMob}
        />
      </FlashHistoryView>
    </Wrapper>
  );
};

export default HistoryButtons;
