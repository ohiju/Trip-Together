import React from 'react';
import Editor from '../../../components/myPage/profile/Editor';
import UserInfo from '../../../components/myPage/profile/UserInfo';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Wrapper} from './ProfileEditStyle';

const ProfileEdit = () => {
  const member = useAppSelector((state: RootState) => state.user.member);

  return (
    <Wrapper>
      <Editor member={member} />
      <UserInfo member={member} />
    </Wrapper>
  );
};

export default ProfileEdit;
