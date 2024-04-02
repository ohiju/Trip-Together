import {Asset} from 'react-native-image-picker';

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
  gender: 'FEMALE' | 'MALE';
  birth: string;
  created_at: string;
  username: string;
}

interface putData {
  imgConfig?: Asset;
  nickname?: string;
  description?: string;
}

interface UserState {
  user: user;
  member: member;
  putData: putData;
}

export type {UserState, member, putData, user};
