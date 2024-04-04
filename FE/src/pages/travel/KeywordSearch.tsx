import {TRIP_API_URL} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import AppInput from '../../components/common/AppInput';
import {bg_light, bg_lightgray} from '../../constants/colors';
import getToken from '../../hooks/getToken';
import {TripTitleStackParams} from '../../interfaces/router/TripTitleStackParams';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setLocation, setPlaces} from '../../store/slices/trip';

const KeywordSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef<TextInput | null>(null);

  const navigation = useNavigation<NavigationProp<TripTitleStackParams>>();
  const dispatch = useAppDispatch();
  const trip = useAppSelector(state => state.trip.tripInfo);

  const handleSearchChange = async (text: string) => {
    setSearchText(text);
    const {access_token} = await getToken();

    try {
      const response = await axios.get(
        `${TRIP_API_URL}/api/attraction/v1/attractions/search?latitude=${trip.start_latitude}&longitude=${trip.start_longitude}&keyword=${text}&category=`,
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
        `${TRIP_API_URL}/api/attraction/v1/attractions/click?latitude=${
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
        `${TRIP_API_URL}/api/attraction/v1/attractions/click?latitude=${
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

  useEffect(() => {
    if (!searchInputRef) return;
    searchInputRef.current?.focus();
  }, [searchInputRef]);

  return (
    <Container>
      <SearchInput
        ref={searchInputRef}
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChangeText={handleSearchChange}
      />
      <IconContainer>
        <IconInputs onPress={() => handleButtonPress('명소')}>
          <IconImage source={require('../../assets/images/location.png')} />
          <IconText>명소</IconText>
        </IconInputs>
        <IconInputs onPress={() => handleButtonPress('식당')}>
          <IconImage source={require('../../assets/images/restaurant.png')} />
          <IconText>음식</IconText>
        </IconInputs>
        <IconInputs onPress={() => handleButtonPress('숙소')}>
          <IconImage source={require('../../assets/images/home.png')} />
          <IconText>숙박</IconText>
        </IconInputs>
      </IconContainer>
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <ResultItem onPress={() => handlePressLocation(item)}>
            <Text>{item.name}</Text>
          </ResultItem>
        )}
        keyExtractor={(_, index) => index.toString()}
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

const IconInputs = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid ${bg_lightgray};
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  margin: 0 15px;
`;

const IconImage = styled.Image`
  width: 25px;
  height: 25px;
`;

const IconText = styled.Text`
  font-size: 16px;
  margin-left: 8px;
`;

const SearchInput = styled(AppInput)`
  height: 50px;
  border-color: gray;
  border-width: 1px;
  border-radius: 8px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const ResultItem = styled(TouchableOpacity)`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export default KeywordSearch;
