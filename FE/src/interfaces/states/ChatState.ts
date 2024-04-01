import {member} from './UserState';

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
  created_at: Date;
  status: status;
}

interface ChatState {
  flashmobs: flashmob[];
  messages: message[];
  flashmob: {
    members: member[];
    currency_code: string;
  };
}

export type {ChatState, flashmob, message, status};
