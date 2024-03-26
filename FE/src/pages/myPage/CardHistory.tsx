import React from 'react';
import History from '../../components/myPage/cardHistory/History';
import groupByDate from '../../hooks/groupByDate';
import {RootState} from '../../store';
import {useAppSelector} from '../../store/hooks';
import {Wrapper} from './CardHistoryStyle';
import GroupedHistory from '../../components/myPage/cardHistory/GroupedHistory';

const CardHistory = () => {
  const histories = useAppSelector(
    (state: RootState) => state.cardHistory.content,
  );
  const groupedHistories = groupByDate(histories);

  return (
    <Wrapper>
      {Object.entries(groupedHistories).map(([date, histories]) => (<GroupedHistory key={}/>))}
    </Wrapper>
  );
};

export default CardHistory;
