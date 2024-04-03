import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import useGetMember from '../../../apis/member/useGetMember';
import AppButton from '../../../components/common/AppButton';
import HistoryButtons from '../../../components/myPage/profile/HistoryButtons';
import MyData from '../../../components/myPage/profile/MyData';
import Profile from '../../../components/myPage/profile/Profile';
import {profileEditButton, reportButton} from '../../../constants/AppButton';
import useSwipeBottom from '../../../hooks/useSwipeBottom';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {BtnView, ProfileView, Wrapper} from './ProfileMainStyle';

const ProfileMain = () => {
  // 데이터
  const user_id = useAppSelector(
    (state: RootState) => state.user.user.member_id,
  );
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const {member_id} =
    useRoute<RouteProp<MyPageStackParams, 'ProfileMain'>>().params;
  const isUser = user_id === member_id;

  // 제목 설정
  useEffect(() => {
    navigation.setOptions({
      title: isUser ? '내 프로필' : '프로필',
    });
  }, []);

  // 라우팅, 신고
  const onSwipeBottom = () => {
    navigation.goBack();
  };
  const {onTouchStart, onTouchEnd} = useSwipeBottom(onSwipeBottom);
  const report = () => {};
  const handlePressButton = () => {
    if (isUser) {
      navigation.navigate('ProfileEdit');
    } else {
      Alert.alert('이 유저를 신고하시겠습니까?', '', [
        {
          text: '예',
          onPress: report,
        },
        {
          text: '아니오',
        },
      ]);
    }
  };

  // API
  const getMember = useGetMember();
  useEffect(() => {
    getMember({member_id});
  }, []);

  return (
    <Wrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <ProfileView>
        <Profile />
        <BtnView>
          <AppButton
            style={isUser ? profileEditButton : reportButton}
            text={isUser ? '프로필 수정' : '신고하기'}
            onPress={handlePressButton}
          />
        </BtnView>
        <HistoryButtons />
      </ProfileView>
      <MyData />
    </Wrapper>
  );
};

export default ProfileMain;
