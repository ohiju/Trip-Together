import {ParamListBase} from '@react-navigation/native';

interface PinConfirmParams {
  pin: string;
}

interface PinStackParams extends ParamListBase {
  PinMain: undefined;
  PinRegist: undefined;
  PinConfirm: PinConfirmParams;
}

export type {PinConfirmParams, PinStackParams};
