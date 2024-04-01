import {IMAGE_BASE_URL} from '@env';
import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {bg_danger, bg_lightgray, primary} from '../../../constants/colors';
import {message as messageType} from '../../../interfaces/states/ChatState';
import {
  Btn,
  BtnText,
  BtnView,
  Card,
  Content,
  ContentView,
  Image,
  Nickname,
  ProfileImg,
  ProfileView,
  Wrapper,
} from './AttendStyle';

interface AttendProps {
  message: messageType;
}

const Attent = ({message}: AttendProps) => {
  // 데이터
  const image_url = message.sender_image_url
    ? {uri: `${IMAGE_BASE_URL}/${message.sender_image_url}`}
    : imagePath.profiledefault;

  // API
  const handleAccept = () => {};
  const handleReject = () => {};

  // 라우팅
  const handleToProfile = () => {};

  return (
    <Wrapper>
      <Card>
        <Image source={imagePath.attend} resizeMode="cover" />
        <ProfileView>
          <ProfileImg source={image_url} resizeMode="contain" />
          <ContentView>
            <Content>
              <Nickname>{message.sender_nickname}</Nickname> 님 께서 참가를
              요청하셨습니다. 수락하시겠습니까?
            </Content>
          </ContentView>
        </ProfileView>
        <BtnView>
          <Btn style={{backgroundColor: primary}} onPress={handleAccept}>
            <BtnText>수락</BtnText>
          </Btn>
          <Btn
            style={{backgroundColor: bg_lightgray}}
            onPress={handleToProfile}>
            <BtnText>프로필 보기</BtnText>
          </Btn>
          <Btn style={{backgroundColor: bg_danger}} onPress={handleReject}>
            <BtnText>거절</BtnText>
          </Btn>
        </BtnView>
      </Card>
    </Wrapper>
  );
};

export default Attent;
