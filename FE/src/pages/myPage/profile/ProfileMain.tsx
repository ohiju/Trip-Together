import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import AppButton from '../../../components/common/AppButton';
import {Title} from '../../../components/common/InfoPageStyle';
import HistoryButton from '../../../components/myPage/profile/HistoryButton';
import Profile from '../../../components/myPage/profile/Profile';
import {profileEditButton} from '../../../constants/AppButton';
import useSwipeBottom from '../../../hooks/useSwipeBottom';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {
  FlashHistoryView,
  HistoryBtnBox,
  MyDataView,
  ProfileView,
  TripHistoryView,
  Wrapper,
} from './ProfileMainStyle';

const ProfileMain = () => {
  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const onSwipeBottom = () => {
    navigation.navigate('MyMain');
  };
  const {onTouchStart, onTouchEnd} = useSwipeBottom(onSwipeBottom);
  const handleToProfileTrip = () => {
    navigation.navigate('ProfileTrip');
  };
  const handleToProfileFlashMob = () => {
    navigation.navigate('ProfileFlashMob');
  };
  const handleToProfileEdit = () => {
    navigation.navigate('ProfileEdit');
  };

  return (
    <Wrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <ProfileView>
        <Profile />
        <AppButton
          style={profileEditButton}
          text="프로필 수정"
          onPress={handleToProfileEdit}
        />
        <HistoryBtnBox>
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
        </HistoryBtnBox>
      </ProfileView>
      <MyDataView>
        <Title>마이 데이터</Title>
      </MyDataView>
    </Wrapper>
  );
};

export default ProfileMain;
