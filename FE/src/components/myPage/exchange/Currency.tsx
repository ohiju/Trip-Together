import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {kr_currency} from '../../../constants/currencies';
import CurrencyProps from '../../../interfaces/props/CurrencyProps';
import {
  ExchangeSelectSyncProps,
  ExchangeStackParams,
} from '../../../interfaces/router/myPage/ExchangeStackParams';
import {
  NationImage,
  NationText,
  NationView,
  Unit,
  UnitText,
  UnitView,
  Wrapper,
} from './CurrencyStyle';

const Currency = ({currency}: CurrencyProps) => {
  const {nation, nation_kr, currency_code_kr} = currency;
  const unit = String.fromCharCode(currency.unit);

  // 라우팅
  const navigation = useNavigation<NavigationProp<ExchangeStackParams>>();
  const handleToNext = () => {
    const props: ExchangeSelectSyncProps = {
      from_currency: kr_currency,
      to_currency: currency,
      type: 'exchange',
    };
    navigation.navigate('ExchangeSelectSync', props);
  };

  return (
    <Wrapper onPress={handleToNext}>
      <NationView>
        <NationImage
          source={imagePath[`${nation.toLowerCase()}round`]}
          resizeMode="cover"
        />
        <NationText>{nation_kr}</NationText>
      </NationView>
      <UnitView>
        <UnitText>{currency_code_kr}</UnitText>
        <Unit>{unit}</Unit>
      </UnitView>
    </Wrapper>
  );
};

export default Currency;
