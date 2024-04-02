import {IMAGE_BASE_URL} from '@env';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import useGetSettlement from '../../../apis/flashMob/useGetSettlement';
import {imagePath} from '../../../assets/images/imagePath';
import currencies, {
  currency as currencyType,
} from '../../../constants/currencies';
import {TranHistoryStackParams} from '../../../interfaces/router/flashMob/TranHistoryStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Ammount,
  CardView,
  Nickname,
  NicknameView,
  ProfileImg,
  StatusText,
  StatusView,
  Wrapper,
} from './CurSituStyle';

const CurSitu = () => {
  // 데이터
  const {flashmob_id, settlement_id, currency_code} =
    useRoute<RouteProp<TranHistoryStackParams, 'CurSitu'>>().params;
  const {attendees} = useAppSelector(
    (state: RootState) => state.chat.settlement,
  );
  const imageUrl = (image_url: string) => {
    const result = image_url
      ? {uri: `${IMAGE_BASE_URL}/${image_url}`}
      : imagePath.profiledefault;

    return result;
  };
  const ammount = (price: number) => {
    const currency = currencies.find(
      item => item.currency_code === currency_code,
    ) as currencyType;
    const unit = String.fromCharCode(currency.unit);
    return `${unit} ${price.toLocaleString('ko-KR')}`;
  };

  // API
  const getSettlement = useGetSettlement();
  useEffect(() => {
    getSettlement({flashmob_id, settlement_id});
  }, []);

  return (
    <Wrapper>
      {attendees.map(attendee => (
        <CardView key={attendee.member_id}>
          <ProfileImg source={imageUrl(attendee.member_image_url)} />
          <NicknameView>
            <Nickname>{attendee.member_nickname}</Nickname>
            <Ammount>{ammount(attendee.price)}</Ammount>
          </NicknameView>
          <StatusView $hasSent={attendee.has_sent}>
            <StatusText>{attendee.has_sent ? '완료' : '진행 중'}</StatusText>
          </StatusView>
        </CardView>
      ))}
    </Wrapper>
  );
};

export default CurSitu;
