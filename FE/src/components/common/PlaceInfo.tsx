import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {imagePath} from '../../assets/images/imagePath';
import {JoinFlashButton, MakeFlashButton} from '../../constants/AppButton';
import useSwipeTop from '../../hooks/useSwipeTop';
import {TabParams} from '../../interfaces/router/TabParams';
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

const PlaceInfo = ({theme}: {theme: string}) => {
  const [rating] = useState(4.9);

  // 라우팅
  const navigation = useNavigation<NavigationProp<TabParams>>();
  const onSwipeTop = () => {
    if (theme === 'trip') {
      navigation.navigate('placeinfo', {theme});
    } else if (theme === 'flashmob') {
      navigation.navigate('FlashPlaces', {theme});
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
      <PlaceBox>
        <DragBar />
        <PlaceView>
          <PlaceImageView>
            <PlaceImage source={imagePath.sagradafamilla} resizeMode="cover" />
          </PlaceImageView>
          <PlaceInfoView>
            <PlaceName>La Sagrada Familia</PlaceName>
            <Address>C/ de Mallorca, 401, L`Eixample, 08013 Barcelona'</Address>
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
    </Wrapper>
  );
};

export default PlaceInfo;
