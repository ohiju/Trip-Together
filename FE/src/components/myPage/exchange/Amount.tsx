import React from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {font_dark, font_lightgray} from '../../../constants/colors';
import {ExchangeData} from '../../../interfaces/hooks/ExchangeData';
import {
  Exchanged,
  Input,
  InputView,
  Message,
  MessageView,
  TitleText,
  TitleView,
  Unit,
  UnitKr,
  Wrapper,
} from './AmountStyle';

interface AmountProps {
  data: ExchangeData;
  ammount: string;
  rate?: number;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const Amount = ({data, ammount, rate, onChange}: AmountProps) => {
  const {nation, nation_kr, unit, currency_code_kr, message, isFrom} = data;
  const color = isFrom && ammount ? font_dark : font_lightgray;
  const exchanged = (value: string) => {
    if (!value || !rate) return '0';
    const result = (parseInt(value, 10) * rate).toFixed(0);
    return `${result}`;
  };

  return (
    <Wrapper>
      <TitleView>
        <TitleText>
          {nation_kr} {nation}
        </TitleText>
        {!isFrom ? (
          <WithLocalSvg width={26} height={26} asset={iconPath.info} />
        ) : null}
      </TitleView>
      <InputView>
        <Unit>{unit}</Unit>
        {!isFrom ? (
          <Input
            value={ammount}
            onChange={onChange}
            placeholder="0"
            placeholderTextColor={font_lightgray}
            keyboardType="number-pad"
          />
        ) : (
          <Exchanged>{exchanged(ammount)} </Exchanged>
        )}
        <UnitKr $color={color}>{currency_code_kr}</UnitKr>
      </InputView>
      <MessageView>
        <Message>{message}</Message>
      </MessageView>
    </Wrapper>
  );
};

export default Amount;
