import React from 'react';
import parseCardHistory from '../../../hooks/parseCardHistory';
import {cardHistory} from '../../../interfaces/states/CardHistoryState';
import {
  BalaceText,
  BottomView,
  NationImg,
  NationText,
  NationView,
  QuantityText,
  TopView,
  TypeText,
  Wrapper,
} from './HistoryStyle';

interface HistoryProps {
  history: cardHistory;
}

const History = ({history}: HistoryProps) => {
  const {image_url, sign, nation_kr, quantity, type, balance} =
    parseCardHistory(history);

  return (
    <Wrapper>
      <TopView>
        <NationView>
          <NationImg source={image_url} resizeMode="cover" />
          <NationText>{nation_kr}</NationText>
        </NationView>
        <QuantityText $sign={sign}>{quantity}</QuantityText>
      </TopView>
      <BottomView>
        <TypeText>{type}</TypeText>
        <BalaceText>{balance}</BalaceText>
      </BottomView>
    </Wrapper>
  );
};

export default History;

/*
  account_history_id: number;
  nation: string;
  nation_kr: string;
  unit: number;
  type: '충전' | '환불' | '출금';
  usage: string;
  quantity: number;
  created_at: Date;
*/
