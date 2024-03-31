import {ParamListBase} from '@react-navigation/native';
import {currency} from '../../../constants/currencies';

interface receipt {
  business_name: string;
  created_at: string;
  price: number;
}

interface attendee {
  member_id: number;
  member_price: number;
  receipts: receipt[];
}

interface SelectHistoryProps {
  order: number;
  currency: currency;
  attendees: attendee[];
  total_price: number;
}

interface SelectPeopleProps {
  order: number;
  currency: currency;
  attendees: attendee[];
  receipts: receipt[];
  total: number;
  total_price: number;
}

interface SettlementConfirmProps {
  currency: currency;
  total_price: number;
  attendees: attendee[];
}

interface SettlementStackParams extends ParamListBase {
  Settlement: undefined;
  SelectHistory: SelectHistoryProps;
  SelectPeople: SelectPeopleProps;
  SettlementConfirm: SettlementConfirmProps;
}

export type {
  SelectHistoryProps,
  SelectPeopleProps,
  SettlementConfirmProps,
  SettlementStackParams,
  attendee,
  receipt,
};
