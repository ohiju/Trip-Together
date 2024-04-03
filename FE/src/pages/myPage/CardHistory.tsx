import React, {useEffect} from 'react';
import useGetCardHistory, {
  GetCardHistoryParams,
} from '../../apis/account/useGetCardHistory';
import GroupedHistory from '../../components/myPage/cardHistory/GroupedHistory';
import groupByDate from '../../hooks/groupByDate';
import {RootState} from '../../store';
import {useAppSelector} from '../../store/hooks';
import {Wrapper} from './CardHistoryStyle';

const CardHistory = () => {
  const histories = useAppSelector(
    (state: RootState) => state.cardHistory.content,
  );
  const groupedHistories = groupByDate(histories);

  // API (전체 통화 거래 내역 조회)
  const getCardHistory = useGetCardHistory();
  useEffect(() => {
    const params: GetCardHistoryParams = {
      page: 0,
      size: 100,
      sort: 'DESC',
    };
    getCardHistory(params);
  }, []);

  return (
    <Wrapper>
      {groupedHistories.map(([date, groupedHistory]) => (
        <GroupedHistory
          key={date}
          date={date}
          groupedHistory={groupedHistory}
        />
      ))}
    </Wrapper>
  );
};

export default CardHistory;
