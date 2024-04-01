import {IMAGE_BASE_URL} from '@env';
import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {bg_lightgray, primary} from '../../../constants/colors';
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
} from './SettlementStyle';

interface SettlementProps {
  message: messageType;
}

const Settlement = ({message}: SettlementProps) => {
  const image_url = message.sender_image_url
    ? {uri: `${IMAGE_BASE_URL}/${message.sender_image_url}`}
    : imagePath.profiledefault;

  // 라우팅
  const handleToReceipt = () => {};
  const handleToCurSitu = () => {};

  return (
    <Wrapper>
      <Card>
        <Image source={imagePath.settlement} resizeMode="cover" />
        <ProfileView>
          <ProfileImg source={image_url} resizeMode="cover" />
          <ContentView>
            <Content>
              <Nickname>{message.sender_nickname}</Nickname> 님이 정산하기를
              요청했어요!
            </Content>
          </ContentView>
        </ProfileView>
        <BtnView>
          <Btn style={{backgroundColor: primary}} onPress={handleToReceipt}>
            <BtnText>영수증 보기</BtnText>
          </Btn>
          <Btn
            style={{backgroundColor: bg_lightgray}}
            onPress={handleToCurSitu}>
            <BtnText>정산 현황</BtnText>
          </Btn>
        </BtnView>
      </Card>
    </Wrapper>
  );
};

export default Settlement;
