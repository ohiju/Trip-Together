import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import useGetReceipt from '../../../apis/flashMob/useGetReceipt';
import AppButton from '../../../components/common/AppButton';
import {remittanceButton} from '../../../constants/AppButton';
import currencies, {
  currency as currencyType,
} from '../../../constants/currencies';
import parseProfile from '../../../hooks/parseProfile';
import {RootStackParams} from '../../../interfaces/router/RootStackParams';
import {TranHistoryStackParams} from '../../../interfaces/router/flashMob/TranHistoryStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Ammount,
  AmmountText,
  AmmountView,
  CardView,
  DateTime,
  Histories,
  HistoryLeftView,
  HistoryView,
  Nickname,
  Price,
  ProfileImg,
  ProfileView,
  Usage,
  Wrapper,
} from './ReceiptStyle';

const Receipt = () => {
  // 데이터
  const {flashmob_id, settlement_id, currency_code} =
    useRoute<RouteProp<TranHistoryStackParams, 'Receipt'>>().params;
  const receiptDetail = useAppSelector(
    (state: RootState) => state.chat.receipt,
  );
  const {user} = useAppSelector((state: RootState) => state.user);
  const {image_url, nickname} = parseProfile(user);
  const dateTime = (created_at: string) => {
    const result = new Date(created_at).toLocaleString('ko-KR');
    return result;
  };
  const ammount = (price: number) => {
    const currency = currencies.find(
      item => item.currency_code === currency_code,
    ) as currencyType;
    const unit = String.fromCharCode(currency?.unit);
    return `${unit} ${price.toLocaleString('ko-KR')}`;
  };

  // API (송금 요청)
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const remmitance = () => {
    const pinData = {
      flashmob_id,
      settlement_id,
    };
    const api = 'postRemmitance';
    navigation.navigate('PinAuth', {pinData, api});
  };

  // API (영수증 조회)
  const getReceipt = useGetReceipt();
  useEffect(() => {
    getReceipt({flashmob_id, settlement_id});
  }, []);

  return (
    <Wrapper>
      <CardView>
        <ProfileView>
          <ProfileImg source={image_url} />
          <Nickname>{nickname}</Nickname>
          <AmmountView>
            <AmmountText>총 사용 금액</AmmountText>
            <Ammount>{ammount(receiptDetail.price)}</Ammount>
          </AmmountView>
        </ProfileView>
        <Histories>
          {receiptDetail.receipts.map(receipt => (
            <HistoryView key={receipt.business_name}>
              <HistoryLeftView>
                <Usage>{receipt.business_name}</Usage>
                <DateTime>{dateTime(receipt.created_at)}</DateTime>
              </HistoryLeftView>
              <Price>{ammount(receipt.price)}</Price>
            </HistoryView>
          ))}
        </Histories>
        <AppButton
          style={remittanceButton}
          text={receiptDetail.has_sent ? '송금완료' : '송금하기'}
          disabled={receiptDetail.has_sent}
          onPress={remmitance}
        />
      </CardView>
    </Wrapper>
  );
};

export default Receipt;
