interface cardHistory {
  account_history_id: number;
  nation: string;
  nation_kr: string;
  unit: number;
  type: '충전' | '환불' | '출금';
  usage: string;
  quantity: number;
  created_at: string;
  balance: number;
}

interface pageable {
  pageNumber: number;
  pageSize: number;
  last: boolean;
  first: boolean;
}

interface CardHistoryState {
  content: cardHistory[];
  pageable: pageable;
}

export type {CardHistoryState, cardHistory, pageable};
