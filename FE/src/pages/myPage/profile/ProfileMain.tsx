import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import useGetMember from '../../../apis/member/useGetMember';
import AppButton from '../../../components/common/AppButton';
import HistoryButtons from '../../../components/myPage/profile/HistoryButtons';
import MyData from '../../../components/myPage/profile/MyData';
import Profile from '../../../components/myPage/profile/Profile';
import {profileEditButton} from '../../../constants/AppButton';
import useSwipeBottom from '../../../hooks/useSwipeBottom';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {ProfileView, Wrapper} from './ProfileMainStyle';

const ProfileMain = () => {
  const getMember = useGetMember();
  const {member_id} = useAppSelector((state: RootState) => state.user.user);

  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const onSwipeBottom = () => {
    navigation.navigate('MyMain');
  };
  const {onTouchStart, onTouchEnd} = useSwipeBottom(onSwipeBottom);
  const handleToProfileEdit = () => {
    navigation.navigate('ProfileEdit');
  };

  useFocusEffect(() => {
    getMember({member_id});
  });

  return (
    <Wrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <ProfileView>
        <Profile />
        <AppButton
          style={profileEditButton}
          text="프로필 수정"
          onPress={handleToProfileEdit}
        />
        <HistoryButtons />
      </ProfileView>
      <MyData />
    </Wrapper>
  );
};

export default ProfileMain;
