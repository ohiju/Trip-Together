import {ParamListBase} from '@react-navigation/native';
import {bankAccount} from '../../../assets/data/bankAccount';

interface SyncStackParams extends ParamListBase {
  SyncMain: undefined;
  SyncSelect: undefined;
  SyncConfirm: {selected: bankAccount};
  SyncComplete: undefined;
}

export type {SyncStackParams};
