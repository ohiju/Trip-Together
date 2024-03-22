interface bankAccount {
  account_uuid: string;
  account_num: string;
  balance: number;
  name: string;
}

const bankAccounts: bankAccount[] = [
  {
    account_uuid: 'CA43D328-C7ED-4E30-941D-FD647ECDB560',
    account_num: '1002-620-123456',
    balance: 1253672000,
    name: '반짝 정기 예금 통장',
  },
  {
    account_uuid: '76F8196C-DD53-4BEC-A8F3-1FDD4237D90D',
    account_num: '1002-620-987654',
    balance: 5800,
    name: '반짝 여행 통장',
  },
  {
    account_uuid: '06407BD0-209F-435B-99A9-3941EF9A0500',
    account_num: '1002-330-159753',
    balance: 0,
    name: '진짜 내 통장',
  },
];

export type {bankAccount};
export default bankAccounts;
