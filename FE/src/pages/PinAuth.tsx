import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import useDeleteSyncAccount, {
  DeleteSyncAccountData,
} from '../apis/account/useDeleteSyncAccount';
import usePostExchange, {
  PostExchangeData,
} from '../apis/account/usePostExchange';
import usePostSyncAccount, {
  PostSyncAccountData,
} from '../apis/account/usePostSyncAccount';
import usePostRemmitance, {
  PostRemmitanceData,
  PostRemmitanceParams,
} from '../apis/flashMob/usePostRemmitacne';
import usePatchPin, {PatchPinData} from '../apis/member/usePatchPin';
import useQR, {QRdata} from '../apis/useQR';
import AppKeyboard from '../components/common/AppKeyboard';
import {RootStackParams} from '../interfaces/router/RootStackParams';
import {TabParams} from '../interfaces/router/TabParams';
import {
  Pin,
  PinBox,
  PinView,
  TitleText,
  TitleView,
  Wrapper,
} from './PinAuthStyle';

const PinAuth = () => {
  // 핀 번호 입력
  const [pin, setPin] = useState('');
  type tokenType = [boolean, boolean, boolean, boolean, boolean, boolean];
  const initailToken: tokenType = [false, false, false, false, false, false];
  const [tokens, setTokens] = useState(initailToken);
  useEffect(() => {
    const newToken = Array.from({length: 6}, (_, idx) => {
      return idx < pin.length;
    });
    setTokens(newToken as tokenType);
  }, [pin]);
  const navigation = useNavigation<NavigationProp<TabParams>>();

  // api 요청 매서드
  const postSyncAccount = usePostSyncAccount();
  const postExchange = usePostExchange();
  const postRemmitance = usePostRemmitance();
  const qrpay = useQR();
  const deleteSyncAccount = useDeleteSyncAccount();
  const patchPin = usePatchPin();
  const {pinData, api} =
    useRoute<RouteProp<RootStackParams, 'PinAuth'>>().params;
  useEffect(() => {
    if (pin.length === 6) {
      if (api === 'postSyncAccount') {
        const data: PostSyncAccountData = {
          ...(pinData as PostSyncAccountData),
          pin_num: pin,
        };
        postSyncAccount(data);
      } else if (api === 'postExchange') {
        const data: PostExchangeData = {
          ...(pinData as PostExchangeData),
          pin_num: pin,
        };
        postExchange(data);
      } else if (api === 'postRemmitance') {
        const params: PostRemmitanceParams = {
          ...(pinData as PostRemmitanceParams),
        };
        const data: PostRemmitanceData = {
          pin_num: pin,
        };
        postRemmitance(params, data);
      } else if (api === 'qrpay') {
        const data: QRdata = {
          ...(pinData as QRdata),
          pin_num: pin,
        };
        qrpay(data);
      } else if (api === 'deleteSyncAccount') {
        const data: DeleteSyncAccountData = {
          ...(pinData as DeleteSyncAccountData),
          pin_num: pin,
        };
        deleteSyncAccount(data);
      } else if (api === 'pinPatch') {
        let data: PatchPinData = {
          ...(pinData as PatchPinData),
        };
        if (data.pre_pin_num === '') {
          data.pre_pin_num = pin;
          navigation.navigate('PinAuth', {pinData: data, api});
        } else if (data.new_pin_num === '') {
          data.new_pin_num = pin;
          navigation.navigate('PinAuth', {pinData: data, api});
        } else if (data.new_pin_num_check === '') {
          data.new_pin_num_check = pin;
          patchPin(data);
        }
      }
    }
  }, [pin]);

  const title = () => {
    if (api === 'pinPatch') {
      const data = pinData as PatchPinData;
      if (data.pre_pin_num === '') {
        return '이전 PIN 번호를 눌러주세요';
      } else if (data.new_pin_num === '') {
        return '새 PIN 번호를 입력해주세요';
      } else if (data.new_pin_num_check === '') {
        return '새 PIN 번호를 확인해주세요';
      }
    }
    return 'PIN 번호를 눌러주세요';
  };

  return (
    <Wrapper>
      <TitleView>
        <TitleText>{title()}</TitleText>
        <PinBox>
          {tokens.map((token, idx) => (
            <PinView key={idx}>
              <Pin $token={token} />
            </PinView>
          ))}
        </PinBox>
      </TitleView>
      <AppKeyboard value={pin} setValue={setPin} maxLength={6} />
    </Wrapper>
  );
};

export default PinAuth;
