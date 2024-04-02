import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {JoinFlashButton, MakeFlashButton} from '../../constants/AppButton';
import getCurrency from '../../hooks/getCurrency';
import useSwipeTop from '../../hooks/useSwipeTop';
import {MapStackParams} from '../../interfaces/router/MapStackParams';
import {useAppSelector} from '../../store/hooks';
import {StyledShadow} from '../myPage/main/ProfileStyle';
import AppButton from './AppButton';
import {
  Address,
  ButtonContainer,
  ButtonView,
  Description,
  DetailsRow,
  DragBar,
  PlaceBox,
  PlaceImage,
  PlaceImageView,
  PlaceInfoView,
  PlaceName,
  PlaceView,
  Price,
  Rating,
  Wrapper,
} from './PlaceInfoStyle';

const PlaceInfo = ({theme, place}: any) => {
  const navigation = useNavigation<NavigationProp<MapStackParams>>();
  const onSwipeTop = () => {
    if (theme === 'trip') {
      navigation.navigate('placeinfo', {theme});
    } else if (theme === 'flashmob') {
      navigation.navigate('FlashPlaces', {theme});
    }
  };
  const {onTouchStart, onTouchEnd} = useSwipeTop(onSwipeTop);
  const nation = useAppSelector(state => state.trip.tripInfo.nation);

  const handlePressMake = () => {
    navigation.navigate('FlashCreate', {id: place.attraction_id});
  };
  const handlePressAllFlash = () => {
    navigation.navigate('FlashList', {id: place.attraction_id});
  };

  return (
    <Wrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <StyledShadow offset={[0, 1]}>
        <PlaceBox>
          <DragBar />
          <PlaceView>
            <PlaceImageView>
              <PlaceImage
                source={{uri: place?.thumbnail_image_url}}
                resizeMode="cover"
              />
            </PlaceImageView>
            <PlaceInfoView>
              <PlaceName>{place?.name}</PlaceName>
              <Address>{place?.address}</Address>
              {theme === 'trip' ? (
                <Description>
                  <Rating>{place?.avg_rating}</Rating>
                  <StarRatingDisplay rating={place?.avg_rating} starSize={20} />
                  <Price>
                    {getCurrency(nation)} {place?.avg_price}
                  </Price>
                </Description>
              ) : (
                <DetailsRow>
                  <Rating>평점: {place?.avg_rating}</Rating>
                  <ButtonContainer>
                    <ButtonView>
                      <AppButton
                        text="모임 생성"
                        style={MakeFlashButton}
                        onPress={handlePressMake}
                      />
                    </ButtonView>
                    <ButtonView>
                      <AppButton
                        text="모임 검색"
                        style={JoinFlashButton}
                        onPress={handlePressAllFlash}
                      />
                    </ButtonView>
                  </ButtonContainer>
                </DetailsRow>
              )}
            </PlaceInfoView>
          </PlaceView>
        </PlaceBox>
      </StyledShadow>
    </Wrapper>
  );
};

export default PlaceInfo;
