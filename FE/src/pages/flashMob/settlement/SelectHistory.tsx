import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import useGetCardHistory, {
  GetCardHistoryParams,
} from '../../../apis/account/useGetCardHistory';
import {iconPath} from '../../../assets/icons/iconPath';
import AppButton from '../../../components/common/AppButton';
import {Title} from '../../../components/common/InfoPageStyle';
import {BottomButton} from '../../../constants/AppButton';
import {bg_lightgray, secondary} from '../../../constants/colors';
import filterByCurrency from '../../../hooks/filterByCurrency';
import groupByDate from '../../../hooks/groupByDate';
import {
  SelectPeopleProps,
  SettlementStackParams,
  receipt,
} from '../../../interfaces/router/flashMob/SettlementStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {} from '../../LoginStyle';
import {
  Ammount,
  CardView,
  CheckBox,
  DateText,
  DateTime,
  DateView,
  GroupView,
  Groups,
  HistoryView,
  TitleView,
  TotalText,
  TotalView,
  UsageText,
  UsageView,
  Wrapper,
} from './SelectHistoryStyle';

const SelectHistory = () => {
  // 데이터
  const cardHistory = useAppSelector(
    (state: RootState) => state.cardHistory.content,
  );
  const {flashmob_id, order, currency, attendees, total_price} =
    useRoute<RouteProp<SettlementStackParams, 'SelectHistory'>>().params;
  const filtered = filterByCurrency(cardHistory, currency);
  const groups = groupByDate(filtered);
  const unit = String.fromCharCode(currency.unit);

  // 체크박스, 총 금액 (영수증, 총 금액 제작용)
  const [checked, setChecked] = useState<number[]>([]);
  const [total, setTotal] = useState(0);
  const isChecked = (account_history_id: number) => {
    if (checked.includes(account_history_id)) {
      return secondary;
    } else {
      return bg_lightgray;
    }
  };
  const handleCheck = (account_history_id: number, quantity: number) => {
    if (checked.includes(account_history_id)) {
      const result = checked.filter(item => item !== account_history_id);
      setChecked(result);
      setTotal(total - quantity);
    } else {
      const result = [...checked, account_history_id];
      setChecked(result);
      setTotal(total + quantity);
    }
  };

  // API (전체 통화 거래 내역 조회)
  const getCardHistory = useGetCardHistory();
  useEffect(() => {
    const params: GetCardHistoryParams = {
      page: 0,
      size: 10,
      sort: 'DESC',
    };
    getCardHistory(params);
  }, []);

  // 인피니티 스크롤

  // 라우팅
  const navigation = useNavigation<NavigationProp<SettlementStackParams>>();
  const handleToNext = () => {
    const receipts = filtered
      .map(item => {
        if (checked.includes(item.account_history_id)) {
          return {
            business_name: item.usage,
            created_at: item.created_at.toLocaleString('ko-KR'),
            price: item.quantity,
          };
        }
      })
      .filter(item => item !== undefined) as receipt[];
    const props: SelectPeopleProps = {
      flashmob_id,
      order,
      currency,
      attendees,
      receipts,
      total,
      total_price,
    };
    navigation.navigate('SelectPeople', props);
  };

  return (
    <Wrapper>
      <CardView>
        <TitleView>
          <Title>거래 내역</Title>
        </TitleView>
        <Groups>
          {groups.map(([date, group]) => (
            <GroupView key={date}>
              <DateView>
                <DateText>{date}</DateText>
              </DateView>
              {group.map(history => (
                <HistoryView key={history.account_history_id}>
                  <DateTime>
                    {history.created_at.toLocaleString('ko-KR')}
                  </DateTime>
                  <UsageView>
                    <UsageText>{history.usage}</UsageText>
                    <CheckBox
                      onPress={() =>
                        handleCheck(
                          history.account_history_id,
                          history.quantity,
                        )
                      }>
                      <WithLocalSvg
                        width={28}
                        height={28}
                        fill={isChecked(history.account_history_id)}
                        asset={iconPath.checkcircle}
                      />
                    </CheckBox>
                  </UsageView>
                  <Ammount>
                    {unit} {history.quantity}
                  </Ammount>
                </HistoryView>
              ))}
            </GroupView>
          ))}
        </Groups>
        <TotalView>
          <TotalText>
            총 사용 금액 : {unit} {total.toLocaleString('ko-KR')}
          </TotalText>
        </TotalView>
      </CardView>
      <AppButton
        style={BottomButton}
        text="다음"
        disabled={!checked.length}
        onPress={handleToNext}
      />
    </Wrapper>
  );
};

export default SelectHistory;
