import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import useGetMember from '../../../apis/member/useGetMember';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Wrapper} from './ProfileEditStyle';

const ProfileEdit = () => {
  const getMember = useGetMember();
  const {member_id} = useAppSelector((state: RootState) => state.user.user);

  useFocusEffect(() => {
    getMember({member_id});
  });

  return (
    <Wrapper>
      <></>
      <></>
    </Wrapper>
  );
};

export default ProfileEdit;
