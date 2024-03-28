import React, {useState, useEffect, useRef} from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../constants/colors';

const KeywordSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([
    '프랑스',
    '파리',
    '몽펠리에',
  ]);
  const searchInputRef = useRef(null);

  const handleSearchChange = text => {
    setSearchText(text);
    setSearchResults([]);
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <Container>
      {/* Search Bar */}
      <SearchInput
        ref={searchInputRef}
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChangeText={handleSearchChange}
      />

      {/* Icon Bar */}
      <IconContainer>
        <IconInputs>
          <IconImage source={require('../../assets/images/location.png')} />
          <IconText>명소</IconText>
        </IconInputs>
        <IconInputs>
          <IconImage source={require('../../assets/images/confetti.png')} />
          <IconText>축제</IconText>
        </IconInputs>
        <IconInputs>
          <IconImage source={require('../../assets/images/restaurant.png')} />
          <IconText>음식</IconText>
        </IconInputs>
        <IconInputs>
          <IconImage source={require('../../assets/images/home.png')} />
          <IconText>숙박</IconText>
        </IconInputs>
      </IconContainer>

      {/* Search Results */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <ResultItem>
            <Text>123</Text>
          </ResultItem>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${bg_light};
`;

const IconContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

const IconInputs = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid ${font_dark};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const IconImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const IconText = styled.Text`
  font-size: 12px;
`;

const SearchInput = styled.TextInput`
  height: 50px;
  border-color: gray;
  border-width: 1px;
  border-radius: 8px;
  padding-horizontal: 10px;
  margin-bottom: 10px;
`;

const ResultItem = styled(TouchableOpacity)`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export default KeywordSearch;
