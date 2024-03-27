interface user {
  member_id: number;
  username: string;
  nickname: string;
  image_url: string;
  description: string;
  is_pin: boolean;
}

interface member {
  member_id: number;
  image_url: string;
  nickname: string;
  description: string;
  gender: 'F' | 'M' | '';
  birth: string;
  created_at: string;
  username: string;
}

interface UserState {
  isLogin: boolean;
  user: user;
  member: member;
}

export type {UserState, member, user};
