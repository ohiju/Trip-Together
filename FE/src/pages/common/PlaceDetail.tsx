import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {PlaceDetail} from '../../assets/data/placedetail';
import {imagePath} from '../../assets/images/imagePath';
import AppButton from '../../components/common/AppButton';
import {JoinFlashButton, MakeFlashButton} from '../../constants/AppButton';
import {PlaceStackParams} from '../../interfaces/router/PlaceStackParams';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addItemToBag} from '../../store/slices/bag';
import {
  Address,
  Bag,
  BagImage,
  ButtonContainer,
  Container,
  DetailsContainer,
  Header,
  HeaderContainer,
  HeadersContainer,
  ImageBackground,
  Info,
  Line,
  NavButton,
  NavigationButtons,
  ProfileImage,
  ReviewContent,
  ReviewDetails,
  ReviewImage,
  ReviewItem,
  ReviewRating,
  ReviewWriter,
  ReviewsContainer,
  StarInfo,
  Title,
} from './PlaceDetailStyle';
import axios from 'axios';
import getToken from '../../hooks/getToken';
import getCurrency from '../../hooks/getCurrency';
import {TRIP_API_URL} from '@env';

interface RouteParams {
  theme?: string;
  id?: number;
}

interface ReviewProp {
  review_id: number;
  writer_id: number;
  writer_profile_image_url: string;
  writer_nickname: string;
  rating: number;
  content: string;
}

interface AttractionProp {
  attraction_name: string;
  attraction_address: string;
  attraction_id: number;
  avg_price: number;
  start_at: string;
  end_at: string;
  attraction_image_urls: string[];
  latitude: string;
  longitude: string;
  reviews: ReviewProp[];
  thumbnail_image_url: string;
}

const AttractionDetailsPage = () => {
  const [show, setShow] = useState(true);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [attraction, setAttraction] = useState<AttractionProp>(PlaceDetail[0]);
  const nation = useAppSelector(state => state.trip.tripInfo.nation);

  const route = useRoute();
  const {theme, id}: RouteParams = route.params || {};
  const navigation = useNavigation<NavigationProp<PlaceStackParams>>();

  const attraction_id = id;
  const PlaceBag = useAppSelector(state => state.bag.bagInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    PlaceBag.forEach(item => {
      if (item.attraction_id === attraction_id) {
        setShow(false);
      }
    });
  }, [PlaceBag, attraction_id]);

  useEffect(() => {
    const fetchData = async () => {
      const {access_token} = await getToken();

      try {
        const response = await axios.get(
          `${TRIP_API_URL}/api/attraction/v1/attractions/${id}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        );
        setAttraction(response.data.data);
      } catch (error) {
        //
      }
    };

    fetchData();
  }, [id]);

  const renderImageItem = ({item}: any) => <ReviewImage source={{uri: item}} />;

  const renderReviewItem = ({item}: {item: any}) => (
    <ReviewItem>
      <ProfileImage source={imagePath.profiledefault} />
      <ReviewDetails>
        <ReviewWriter>{item.writer_nickname}</ReviewWriter>
        <ReviewRating>Rating: {item.rating}</ReviewRating>
        <ReviewContent>{item.content}</ReviewContent>
      </ReviewDetails>
    </ReviewItem>
  );

  const goToPreviousReview = () => {
    setCurrentReviewIndex(
      currentReviewIndex === 0
        ? attraction.reviews.length - 1
        : currentReviewIndex - 1,
    );
  };

  const goToNextReview = () => {
    setCurrentReviewIndex(
      currentReviewIndex === attraction.reviews.length - 1
        ? 0
        : currentReviewIndex + 1,
    );
  };

  const handleAddItem = (item: any) => {
    dispatch(addItemToBag(item));
  };

  const keyExtractor = (item: any, index: number) => index.toString();

  const handlePressMake = () => {
    navigation.navigate('FlashCreate', {id});
  };

  const handlePressAllFlash = () => {
    navigation.navigate('FlashList', {id});
  };

  return (
    <FlatList
      data={[attraction]}
      renderItem={({item}) => (
        <Container>
          <ImageBackground
            source={{uri: item.thumbnail_image_url}}
            resizeMode="cover"
          />
          <HeadersContainer>
            <Header>
              <Title>{item.attraction_name}</Title>
              <Address>{item.attraction_address}</Address>
            </Header>
            {theme === 'trip' && (
              <Bag onPress={() => handleAddItem(item)}>
                {show ? (
                  <BagImage source={imagePath.shopping2} resizeMode="cover" />
                ) : (
                  <></>
                )}
              </Bag>
            )}
          </HeadersContainer>

          {theme === 'flashmob' && (
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
          )}

          <DetailsContainer>
            <Title>정보</Title>
            <Line />
            <StarInfo>
              <Info>평점: {4.9}</Info>
              <StarRatingDisplay rating={4.9} starSize={18} />
            </StarInfo>
            <Info>
              평균 가격: {getCurrency(nation)} {item.avg_price}
            </Info>
            <Info>
              운영 시간: {item.start_at} - {item.end_at}
            </Info>

            <ReviewsContainer>
              <Title>사진</Title>
              <Line />
              <FlatList
                data={item.attraction_image_urls}
                renderItem={renderImageItem}
                horizontal
                keyExtractor={keyExtractor}
              />

              <HeaderContainer>
                <Title>리뷰</Title>
                <NavigationButtons>
                  <TouchableOpacity onPress={goToPreviousReview}>
                    <NavButton>{'<'}</NavButton>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={goToNextReview}>
                    <NavButton>{'>'}</NavButton>
                  </TouchableOpacity>
                </NavigationButtons>
              </HeaderContainer>

              <Line />
              <FlatList
                data={[item.reviews[currentReviewIndex]]}
                renderItem={renderReviewItem}
                contentContainerStyle={{
                  paddingHorizontal: 20 / 2,
                }}
                horizontal
                pagingEnabled
                keyExtractor={keyExtractor}
              />
            </ReviewsContainer>
          </DetailsContainer>
        </Container>
      )}
      keyExtractor={keyExtractor}
    />
  );
};

export default AttractionDetailsPage;
