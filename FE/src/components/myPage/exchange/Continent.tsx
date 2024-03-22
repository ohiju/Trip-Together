import React, {useState} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import currencies from '../../../constants/currencies';
import {ContinentProps} from '../../../interfaces/props/ContinentProps';
import {
  ContinentText,
  ContinentView,
  CurrencyBox,
  Wrapper,
} from './ContinentStyle';
import Currency from './Currency';

const Continent = ({continent}: ContinentProps) => {
  const {continent_kr} = continent;
  const selectedCurrencies = currencies.filter(
    currency => currency.continent === continent.continent,
  );

  // 드롭다운
  const [opened, setOpened] = useState(false);
  const handleOpen = () => {
    setOpened(!opened);
  };

  return (
    <Wrapper>
      <ContinentView onPress={handleOpen}>
        <ContinentText>{continent_kr}</ContinentText>
        <WithLocalSvg
          width={30}
          height={30}
          asset={iconPath.caret}
          rotation={opened ? 90 : 0}
        />
      </ContinentView>
      {opened ? (
        <CurrencyBox>
          {selectedCurrencies.map(currency => (
            <Currency key={currency.currency_code} currency={currency} />
          ))}
        </CurrencyBox>
      ) : null}
    </Wrapper>
  );
};

export default Continent;
