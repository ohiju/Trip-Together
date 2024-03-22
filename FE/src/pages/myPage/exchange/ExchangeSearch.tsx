import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import Continent from '../../../components/myPage/exchange/Continent';
import SearchResult from '../../../components/myPage/exchange/SearchResult';
import continents from '../../../constants/continents';
import {useAppDispatch} from '../../../store/hooks';
import {setDisplay} from '../../../store/slices/tabState';
import {
  ResultBox,
  Search,
  SearchBox,
  SearchView,
  Wrapper,
} from './ExchangeSearchStyle';

const ExchangeSearch = () => {
  // 탭바 숨기기
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  // 검색
  const [keyword, setKeyword] = useState('');
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setKeyword(value);
  };

  return (
    <Wrapper>
      <SearchBox>
        <SearchView>
          <Search
            value={keyword}
            onChange={onChange}
            placeholder="국가 또는 통화를 입력해주세요"
          />
          <WithLocalSvg width={20} height={20} asset={iconPath.search} />
        </SearchView>
      </SearchBox>
      <ResultBox>
        {keyword ? (
          <SearchResult keyword={keyword} />
        ) : (
          continents.map(continent => (
            <Continent key={continent.continent} continent={continent} />
          ))
        )}
      </ResultBox>
    </Wrapper>
  );
};

export default ExchangeSearch;
