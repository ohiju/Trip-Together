import React from 'react';
import {Wrapper, SearchInput} from './SearchStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SearchStackParams} from '../../interfaces/router/SearchStackParams';
import {font_light} from '../../constants/colors';

const Search = () => {
  const navigation = useNavigation<NavigationProp<SearchStackParams>>();

  const handleSearchSubmit = () => {
    navigation.navigate('calendar');
  };

  return (
    <Wrapper>
      <SearchInput
        placeholder="어디로 여행을 떠나시나요?"
        placeholderTextColor={font_light}
        onEndEditing={handleSearchSubmit}
      />
    </Wrapper>
  );
};

export default Search;
