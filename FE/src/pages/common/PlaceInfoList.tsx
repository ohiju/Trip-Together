import React from 'react';
import {FlatList} from 'react-native';
// import Places from '../../assets/data/place';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {PlaceStackParams} from '../../interfaces/router/PlaceStackParams';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {
  ItemContainer,
  Thumbnail,
  DetailsContainer,
  StarContainer,
  Name,
  Address,
  Rating,
  Price,
  ThumbnailContainer,
  DetailsRow,
  ButtonContainer,
} from './PlaceInfoListStyle';
import AppButton from '../../components/common/AppButton';
import {MakeFlashButton, JoinFlashButton} from '../../constants/AppButton';
import {useAppSelector} from '../../store/hooks';

interface RouteParams {
  theme?: string;
  places?: any;
}

const PlaceInfoList = () => {
  const navigation = useNavigation<NavigationProp<PlaceStackParams>>();
  const route = useRoute();
  const {theme}: RouteParams = route.params || {};
  const places = useAppSelector(state => state.trip.tripInfo.places);

  const handlePress = (id: number) => {
    if (theme === 'trip') {
      navigation.navigate('placedetail', {theme, id});
    } else if (theme === 'flashmob') {
      navigation.navigate('flashplace', {theme});
    }
  };

  const handlePressMake = () => {
    navigation.navigate('makeflash');
  };

  const handlePressAllFlash = () => {
    navigation.navigate('allflash');
  };

  const renderItem = ({item}: any) => (
    <ItemContainer onPress={() => handlePress(item.attraction_id)}>
      <ThumbnailContainer>
        <Thumbnail
          source={require('../../assets/images/sagradafamilia.png')}
          resizeMode="contain"
        />
      </ThumbnailContainer>
      <DetailsContainer>
        <Name>{item.name}</Name>
        <Address>{item.address}</Address>
        {theme === 'trip' ? (
          <>
            <StarContainer>
              <Rating>평점: {item.avg_rating}</Rating>
              <StarRatingDisplay rating={item.avg_rating} starSize={20} />
            </StarContainer>
            <Price>평균 가격: {item.avg_price}</Price>
          </>
        ) : (
          <DetailsRow>
            <Rating>평점: {item.avg_rating}</Rating>
            <ButtonContainer>
              <AppButton
                text="모임 생성"
                style={MakeFlashButton}
                onPress={handlePressMake}
              />
              <AppButton
                text="모임 검색"
                style={JoinFlashButton}
                onPress={handlePressAllFlash}
              />
            </ButtonContainer>
          </DetailsRow>
        )}
      </DetailsContainer>
    </ItemContainer>
  );

  return (
    <FlatList
      data={places}
      renderItem={renderItem}
      keyExtractor={item => item.attraction_id.toString()}
    />
  );
};

export default PlaceInfoList;
