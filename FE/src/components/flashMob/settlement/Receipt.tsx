import {IMAGE_BASE_URL} from '@env';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {
  SettlementStackParams,
  attendee as attendeeType,
} from '../../../interfaces/router/flashMob/SettlementStackParams';
import {member as memberType} from '../../../interfaces/states/UserState';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Ammount,
  CardView,
  DateTime,
  History,
  HistoryLeftView,
  HistoryView,
  Nickname,
  PageText,
  PageView,
  ProfileImg,
  ProfileView,
  TotalAmmount,
  TotalText,
  TotalView,
  Usage,
  Wrapper,
} from './ReceiptStyle';

interface ReceiptProps {
  attendee: attendeeType;
}

const Receipt = ({attendee}: ReceiptProps) => {
  // 데이터
  const {members} = useAppSelector((state: RootState) => state.chat.flashmob);
  const member = members.find(
    item => attendee.member_id === item.member_id,
  ) as memberType;
  const image_url = member.image_url
    ? {uri: `${IMAGE_BASE_URL}/${member.image_url}`}
    : imagePath.profiledefault;
  const nickname = member.nickname ? member.nickname : member.username;
  const {currency, attendees} =
    useRoute<RouteProp<SettlementStackParams, 'SettlementConfirm'>>().params;
  const unit = String.fromCharCode(currency.unit);
  const curPage =
    attendees.findIndex(item => item.member_id === attendee.member_id) + 1;
  const totalPage = attendees.length;

  return (
    <Wrapper>
      <CardView>
        <ProfileView>
          <ProfileImg source={image_url} />
          <Nickname>{nickname}</Nickname>
          <TotalView>
            <TotalText>총 사용 금액</TotalText>
            <TotalAmmount>
              {unit} {attendee.member_price.toLocaleString('ko-KR')}
            </TotalAmmount>
          </TotalView>
        </ProfileView>
        <HistoryView>
          {attendee.receipts.map(receipt => (
            <History key={receipt.business_name}>
              <HistoryLeftView>
                <Usage>{receipt.business_name}</Usage>
                <DateTime>{receipt.created_at}</DateTime>
              </HistoryLeftView>
              <Ammount>
                {unit} {receipt.price.toLocaleString('ko-KR')}
              </Ammount>
            </History>
          ))}
        </HistoryView>
        <PageView>
          <PageText>
            {curPage}/{totalPage}
          </PageText>
        </PageView>
      </CardView>
    </Wrapper>
  );
};

export default Receipt;
