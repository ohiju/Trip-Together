import React from 'react';
import currencies from '../../../constants/currencies';
import {SearchResultProps} from '../../../interfaces/props/SearchResultProps';
import Currency from './Currency';
import {NoResultText, NoResultView, Wrapper} from './SearchResultStyle';

const SearchResult = ({keyword}: SearchResultProps) => {
  const regex = new RegExp(keyword, 'i');
  const results = currencies.filter(currency => {
    if (
      regex.test(currency.currency_code_kr) ||
      regex.test(currency.nation_kr)
    ) {
      return true;
    }
    return false;
  });

  return (
    <Wrapper>
      {results.length ? (
        results.map(currency => (
          <Currency key={currency.currency_code} currency={currency} />
        ))
      ) : (
        <NoResultView>
          <NoResultText>검색 결과가 없습니다.</NoResultText>
        </NoResultView>
      )}
    </Wrapper>
  );
};

export default SearchResult;
