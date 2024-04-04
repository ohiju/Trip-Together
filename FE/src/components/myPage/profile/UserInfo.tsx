import React from 'react';
import parseProfile from '../../../hooks/parseProfile';
import {member as memberType} from '../../../interfaces/states/UserState';
import {
  ContentRaw,
  ContentText,
  ContentTitle,
  ContentView,
  TitleText,
  Wrapper,
} from './UserInfoStyle';

interface UserInfoProps {
  member: memberType;
}
const UserInfo = ({member}: UserInfoProps) => {
  const {username, birth, created_at, gender} = parseProfile(member);

  return (
    <Wrapper>
      <TitleText>회원 정보</TitleText>
      <ContentRaw>
        <ContentView>
          <ContentTitle>이름</ContentTitle>
          <ContentText>{username}</ContentText>
        </ContentView>
        <ContentView>
          <ContentTitle>생년월일</ContentTitle>
          <ContentText>{birth}</ContentText>
        </ContentView>
      </ContentRaw>
      <ContentRaw>
        <ContentView>
          <ContentTitle>성별</ContentTitle>
          <ContentText>{gender}</ContentText>
        </ContentView>
        <ContentView>
          <ContentTitle>가입일자</ContentTitle>
          <ContentText>{created_at}</ContentText>
        </ContentView>
      </ContentRaw>
    </Wrapper>
  );
};

export default UserInfo;
