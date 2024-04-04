import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SearchStackParams} from '../../interfaces/router/SearchStackParams';
import {useAppDispatch} from '../../store/hooks';
import {
  SearchInput,
  SearchResult,
  SearchResultBox,
  SearchText,
  Wrapper,
} from './SearchStyle';
// import DismissKeyboardView from '../../components/common/DismissKeyboardView';
import {TRIP_API_URL} from '@env';
import {AxiosError, AxiosResponse} from 'axios';
import {FlatList, StyleSheet} from 'react-native';
import useAxios from '../../apis/useAxois';
import {
  Body,
  Hightlight,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../components/common/InfoPageStyle';
import getToken from '../../hooks/getToken';
import {setDisplay} from '../../store/slices/tabState';
import {setStartRegion} from '../../store/slices/trip';

interface CityResult {
  region_id: number;
  nation: string;
  city_name: string;
  latitude: string;
  longitude: string;
}

const Search = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<SearchStackParams>>();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<CityResult[]>([]);

  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  const axios = useAxios();
  const getAttractionBySearch = async (text: string) => {
    const {access_token} = await getToken();
    const result = axios
      .request({
        url: `${TRIP_API_URL}/api/attraction/v1/regions?name=${text}`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res: AxiosResponse) => {
        const regions = res.data.data;
        setSearchResults(regions.regions);
      })
      .catch((err: AxiosError) => {
        console.error('Error fetching search results:', err);
      });

    return result;
  };

  const handleSearchChange = async (text: string) => {
    setSearchText(text);
    getAttractionBySearch(text);
  };

  const handleSearchSubmit = (item: CityResult) => {
    dispatch(setStartRegion(item));
    navigation.navigate('calendar');
  };

  useEffect(() => {
    getAttractionBySearch('');
  }, []);

  return (
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>시작 도시</Hightlight>를
        </Title>
        <Title>검색할 수 있습니다.</Title>
      </TitleView>
      <SloganView>
        <Slogan>시작 도시를 설정하고 여행을 시작해 보세요!</Slogan>
      </SloganView>
      <Body>
        <SearchInput
          placeholder="검색어 입력"
          value={searchText}
          onChangeText={handleSearchChange}
        />
        <FlatList
          style={styles.flatList}
          data={searchResults}
          renderItem={({item}) => (
            <SearchResultBox onPress={() => handleSearchSubmit(item)}>
              <SearchResult>
                <SearchText>{item.city_name}</SearchText>
              </SearchResult>
            </SearchResultBox>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </Body>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  dismissKeyboard: {
    backgroundColor: 'white',
    padding: 20,
  },
  flatList: {
    width: '100%',
  },
  flatListContent: {
    position: 'absolute',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
