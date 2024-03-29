import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AppKeyboard from '../components/common/AppKeyboard';
import {RootStackParams} from '../interfaces/router/RootStackParams';
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

  // api 요청 매서드
  const {data, api} = useRoute<RouteProp<RootStackParams, 'PinAuth'>>().params;
  useEffect(() => {
    if (pin.length === 6) {
      api({data: {...data, pin_num: pin}});
    }
  }, [pin]);

  return (
    <Wrapper>
      <TitleView>
        <TitleText>PIN 번호를 눌러주세요</TitleText>
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
