import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {JoinFlashButton, MakeFlashButton} from '../../constants/AppButton';
import useSwipeTop from '../../hooks/useSwipeTop';
import {MapStackParams} from '../../interfaces/router/MapStackParams';
import AppButton from './AppButton';
import {
  Address,
  ButtonContainer,
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
  StyledShadow,
  Wrapper,
} from './PlaceInfoStyle';

const PlaceInfo = ({theme}: {theme: string}) => {
  const [rating] = useState(4.9);
  // 라우팅
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
              <PlaceName>La Sagrada Familia</PlaceName>
              <Address>
                C/ de Mallorca, 401, L`Eixample, 08013 Barcelona'
              </Address>
              {theme === 'trip' ? (
                <Description>
                  <Rating>{rating}</Rating>
                  <StarRatingDisplay rating={rating} starSize={20} />
                  <Price>₩123,398</Price>
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
