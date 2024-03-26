import {ParamListBase} from '@react-navigation/native';

interface SyncConfirmProps {
  account_uuid: string;
  is_main: 0 | 1;
}

interface SyncStackParams extends ParamListBase {
  SyncMain: undefined;
  SyncSelect: undefined;
  SyncConfirm: SyncConfirmProps;
  SyncComplete: undefined;
}

export type {SyncConfirmProps, SyncStackParams};
