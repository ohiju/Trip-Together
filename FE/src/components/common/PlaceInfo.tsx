import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
// import {imagePath} from '../../assets/images/imagePath';
// import {imageBaseUrl} from '../../constants/urls';
import useSwipeTop from '../../hooks/useSwipeTop';
import {MapStackParams} from '../../interfaces/router/MapStackParams';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
// import {RootState} from '../../store';
// import {useAppSelector} from '../../store/hooks';
import {
  Description,
  DragBar,
  PlaceName,
  PlaceBox,
  PlaceImage,
  PlaceImageView,
  PlaceView,
  StyledShadow,
  PlaceInfoView,
  Address,
  Wrapper,
  Price,
  Rating,
  ButtonContainer,
  DetailsRow,
} from './PlaceInfoStyle';
import AppButton from './AppButton';
import {MakeFlashButton, JoinFlashButton} from '../../constants/AppButton';

const PlaceInfo = ({theme, place}: any) => {
  const [rating] = useState(4.9);

  const navigation = useNavigation<NavigationProp<MapStackParams>>();
  const onSwipeTop = () => {
    if (theme === 'trip') {
      navigation.navigate('placeinfo', {theme});
    } else if (theme === 'flashmob') {
      navigation.navigate('flashmobs', {theme});
    }
  };
  const {onTouchStart, onTouchEnd} = useSwipeTop(onSwipeTop);

  const handlePressMake = () => {
    navigation.navigate('makeflash');
  };

  const handlePressAllFlash = () => {
    navigation.navigate('allflash');
  };

  return (
    <Wrapper onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <StyledShadow offset={[0, 1]}>
        <PlaceBox>
          <DragBar />
          <PlaceView>
            <PlaceImageView>
              <PlaceImage
                source={require('../../assets/images/sagradafamilia.png')}
                resizeMode="contain"
              />
            </PlaceImageView>
            <PlaceInfoView>
              <PlaceName>{place.name}</PlaceName>
              <Address>{place.address}</Address>
              {theme === 'trip' ? (
                <Description>
                  <Rating>{place.avg_rating}</Rating>
                  <StarRatingDisplay rating={place.avg_rating} starSize={20} />
                  <Price>{place.avg_price}</Price>
                </Description>
              ) : (
                <DetailsRow>
                  <Rating>평점: {rating}</Rating>
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
            </PlaceInfoView>
          </PlaceView>
        </PlaceBox>
      </StyledShadow>
    </Wrapper>
  );
};

export default PlaceInfo;
