import React, {useState} from 'react';
import {Wrapper, SearchInput, SearchResult} from './SearchStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SearchStackParams} from '../../interfaces/router/SearchStackParams';
import {useAppDispatch} from '../../store/hooks';
import {useFocusEffect} from '@react-navigation/native';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';
import {StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {setDisplay} from '../../store/slices/tabState';
import axios from 'axios';
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

  const handleSearchChange = async (text: string) => {
    setSearchText(text);
    try {
      const response = await axios.get(
        `https://j10a309.p.ssafy.io/api/attraction/v1/regions?name=${text}`,
      );
      const regions = response.data.data;
      setSearchResults(regions.regions);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearchSubmit = (item: CityResult) => {
    dispatch(setStartRegion(item));
    navigation.navigate('calendar');
  };

  return (
    <DismissKeyboardView style={styles.dismissKeyboard}>
      <Wrapper>
        <SearchInput
          placeholder="어디로 여행을 떠나시나요?"
          value={searchText}
          onChangeText={handleSearchChange}
        />
        <FlatList
          style={styles.flatList}
          data={searchResults}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleSearchSubmit(item)}>
              <SearchResult>
                <Text>{item.city_name}</Text>
              </SearchResult>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </Wrapper>
    </DismissKeyboardView>
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
