import React, {useState, useRef} from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../constants/colors';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import axios from 'axios';
import {setPlaces} from '../../store/slices/trip';
import {setLocation} from '../../store/slices/trip';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TripTitleStackParams} from '../../interfaces/router/TripTitleStackParams';
import getToken from '../../hooks/getToken';

const KeywordSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

  const navigation = useNavigation<NavigationProp<TripTitleStackParams>>();
  const dispatch = useAppDispatch();
  const trip = useAppSelector(state => state.trip.tripInfo);

  const handleSearchChange = async (text: string) => {
    setSearchText(text);
    const {access_token} = await getToken();

    try {
      const response = await axios.get(
        `https://j10a309.p.ssafy.io/api/attraction/v1/attractions/search?latitude=${trip.start_latitude}&longitude=${trip.start_longitude}&keyword=${text}&category=`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      const regions = response.data.data;
      setSearchResults(regions);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleButtonPress = async (text: string) => {
    const {access_token} = await getToken();

    try {
      const response = await axios.get(
        `https://j10a309.p.ssafy.io/api/attraction/v1/attractions/click?latitude=${
          trip.start_latitude
        }&longitude=${
          trip.start_longitude
        }&latitude_delta=${0.622}&longitude_delta=${0.421}&category=${text}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      const res = response.data.data;
      dispatch(setPlaces(res));
      navigation.navigate('map');
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handlePressLocation = async (item: any) => {
    const payload = {latitude: item.latitude, longitude: item.longitude};
    dispatch(setLocation(payload));
    const {access_token} = await getToken();
    try {
      const response = await axios.get(
        `https://j10a309.p.ssafy.io/api/attraction/v1/attractions/click?latitude=${
          item.latitude
        }&longitude=${
          item.longitude
        }&latitude_delta=${0.622}&longitude_delta=${0.421}&category=`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      const res = response.data.data;
      dispatch(setPlaces(res));
      navigation.navigate('map');
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

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
        <IconInputs onPress={() => handleButtonPress('명소')}>
          <IconImage source={require('../../assets/images/location.png')} />
          <IconText>명소</IconText>
        </IconInputs>
        {/* <IconInputs onPress={() => handleButtonPress('축제')}>
          <IconImage source={require('../../assets/images/confetti.png')} />
          <IconText>축제</IconText>
        </IconInputs> */}
        <IconInputs onPress={() => handleButtonPress('식당')}>
          <IconImage source={require('../../assets/images/restaurant.png')} />
          <IconText>음식</IconText>
        </IconInputs>
        <IconInputs onPress={() => handleButtonPress('숙소')}>
          <IconImage source={require('../../assets/images/home.png')} />
          <IconText>숙박</IconText>
        </IconInputs>
      </IconContainer>

      {/* Search Results */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <ResultItem onPress={() => handlePressLocation(item)}>
            <Text>{item.name}</Text>
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
  background-color: ${bg_light};
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
