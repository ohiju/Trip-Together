import {receipt} from '../router/flashMob/SettlementStackParams';

interface flashmob {
  flashmob_id: number;
  master_id: number;
  master_image_url: string;
  flashmob_title: string;
  flashmob_start_at: Date;
  flashmob_max_count: number;
  flashmob_current_count: number;
  member_flashmob_id: number;
  attraction_name: string;
  status: 'WAIT' | 'ATTEND' | 'REFUSE_UNCHECK';
}

type status = 'MESSAGE' | 'ATTEND' | 'SETTLEMENT' | 'JOIN';

interface message {
  flashmob_id: number;
  sender_id: number;
  sender_nickname: string;
  sender_image_url: string;
  content: string;
  created_at: string;
  status: status;
}

interface member {
  member_id: number;
  member_image_url: string;
  member_nickname: string;
}

interface flashmobInfo {
  members: member[];
}

interface settlement {
  settlement_id: number;
  total_price: number;
  currency_code: string;
  is_done: boolean;
  receiver_id: number;
  receiver_nickname: string;
  receiver_image_url: string;
}

interface settlements {
  requester_settlements: settlement[];
  participant_settlements: settlement[];
}

interface receiptDetail {
  price: number;
  has_sent: boolean;
  receipts: receipt[];
}

interface attendee {
  member_id: number;
  member_nickname: string;
  member_image_url: string;
  price: number;
  has_sent: boolean;
}

interface settlementDetail {
  attendees: attendee[];
}

interface ChatState {
  flashmobs: flashmob[];
  messages: message[];
  flashmob: flashmobInfo;
  settlements: settlements;
  receipt: receiptDetail;
  settlement: settlementDetail;
}

export type {
  ChatState,
  attendee,
  flashmob,
  flashmobInfo,
  member,
  message,
  receiptDetail,
  settlement,
  settlementDetail,
  settlements,
  status,
};
