import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {JoinFlashButton, MakeFlashButton} from '../../../constants/AppButton';
import useSwipeTop from '../../../hooks/useSwipeTop';
import {FlashMobStackParams} from '../../../interfaces/router/flashMob/FlashMobStackParams';
import AppButton from '../../common/AppButton';
import {
  Address,
  ButtonContainer,
  ButtonView,
  DetailsRow,
  DragBar,
  PlaceBox,
  PlaceImage,
  PlaceImageView,
  PlaceInfoView,
  PlaceName,
  PlaceView,
  Rating,
  Wrapper,
} from './SelectedPlaceStyle';

const SelectedPlace = () => {
  const [rating] = useState(4.9);

  // 라우팅
  const navigation = useNavigation<NavigationProp<FlashMobStackParams>>();
  const onSwipeTop = () => {
    navigation.navigate('FlashPlaces');
  };
  const {onTouchStart, onTouchEnd} = useSwipeTop(onSwipeTop);

  const handlePressMake = () => {
    navigation.navigate('FlashCreate');
  };
  const handlePressAllFlash = () => {
    navigation.navigate('FlashList');
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
          </PlaceInfoView>
        </PlaceView>
      </PlaceBox>
    </Wrapper>
  );
};

export default SelectedPlace;
