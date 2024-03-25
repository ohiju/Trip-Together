import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  UserState,
  syncAccount,
  tripAccount,
  user,
} from '../../interfaces/states/UserState';

/* 
여행 계좌 정보
{nation: 'UK', nation_kr: '영국', unit: 163, balance: 28.88},
{nation: 'EU', nation_kr: 'EU', unit: 8364, balance: 485.88},
은행 계좌 정보
{account_uuid: 'CA43D328-C7ED-4E30-941D-FD647ECDB560', account_num: '1002-620-123456', balance: 1253672524845, name: '반짝 정기 예금 통장'},
{account_uuid: '76F8196C-DD53-4BEC-A8F3-1FDD4237D90D', account_num: '1002-620-987654', balance: 5800, name: '반짝 여행 통장'},
{account_uuid: '06407BD0-209F-435B-99A9-3941EF9A0500', account_num: '1002-330-159753', balance: 0, name: '진짜 내 통장'}
연동 계좌 정보
{account_uuid: 'CA43D328-C7ED-4E30-941D-FD647ECDB560', account_num: '1002-620-123456', name: '반짝 정기 예금 통장', is_main: 1},
{account_uuid: '76F8196C-DD53-4BEC-A8F3-1FDD4237D90D', account_num: '1002-620-987654', name: '반짝 여행 통장', is_main: 0},
*/

const initialState: UserState = {
  user: {
    member_id: 1,
    username: 'username',
    nickname: 'nickname',
    image_url: '300x300',
    description: 'description',
    is_pin: false,
  },
  sync_accounts: [],
  trip_accounts: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<user>) => {
      state.user = action.payload;
    },
    setPin: (state, action: PayloadAction<boolean>) => {
      state.user.is_pin = action.payload;
    },
    setSyncAccounts: (state, action: PayloadAction<syncAccount[]>) => {
      state.sync_accounts = action.payload;
    },
    setTripAccounts: (state, action: PayloadAction<tripAccount[]>) => {
      state.trip_accounts = action.payload;
    },
  },
});

export const {setPin, setUser, setSyncAccounts, setTripAccounts} =
  userSlice.actions;

export default userSlice.reducer;
