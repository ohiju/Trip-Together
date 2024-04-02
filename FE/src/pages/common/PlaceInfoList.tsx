import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import AppButton from '../../components/common/AppButton';
import {JoinFlashButton, MakeFlashButton} from '../../constants/AppButton';
import {
  Address,
  ButtonContainer,
  DetailsContainer,
  DetailsRow,
  ItemContainer,
  Name,
  Price,
  Rating,
  StarContainer,
  Thumbnail,
  ThumbnailContainer,
  Wrapper,
} from './PlaceInfoListStyle';
import {useAppSelector} from '../../store/hooks';
import {MapStackParams} from '../../interfaces/router/MapStackParams';
import getCurrency from '../../hooks/getCurrency';

interface RouteParams {
  theme?: string;
}

const PlaceInfoList = () => {
  const navigation = useNavigation<NavigationProp<MapStackParams>>();
  const route = useRoute();
  const {theme}: RouteParams = route.params || {};
  const places = useAppSelector(state => state.trip.tripInfo.places);
  const nation = useAppSelector(state => state.trip.tripInfo.nation);

  // const onSwipeBottom = () => {
  //   navigation.navigate('FlashMain');
  // };
  // const {onTouchStart, onTouchEnd} = useSwipeBottom(onSwipeBottom);

  const handlePress = (id: number) => {
    if (theme === 'trip') {
      navigation.navigate('placedetail', {theme, id});
    } else if (theme === 'flashmob') {
      navigation.navigate('FlashPlace', {theme, id});
    }
  };

  const handlePressMake = (id: number) => {
    navigation.navigate('FlashCreate', {id});
  };
  const handlePressAllFlash = (id: number) => {
    navigation.navigate('FlashList', {id});
  };

  const renderItem = ({item}: any) => (
    <Wrapper>
      <ItemContainer onPress={() => handlePress(item.attraction_id)}>
        <ThumbnailContainer>
          <Thumbnail
            source={{uri: item.thumbnail_image_url}}
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
              <Price>
                평균 가격: {getCurrency(nation)} {item.avg_price}
              </Price>
            </>
          ) : (
            <DetailsRow>
              <Rating>평점: {item.avg_rating}</Rating>
              <ButtonContainer>
                <AppButton
                  text="모임 생성"
                  style={MakeFlashButton}
                  onPress={() => handlePressMake(item.attraction_id)}
                />
                <AppButton
                  text="모임 검색"
                  style={JoinFlashButton}
                  onPress={() => handlePressAllFlash(item.attraction_id)}
                />
              </ButtonContainer>
            </DetailsRow>
          )}
        </DetailsContainer>
      </ItemContainer>
    </Wrapper>
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
