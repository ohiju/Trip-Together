import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {PlaceDetail} from '../../assets/data/placedetail';
import {
  Container,
  ImageBackground,
  DetailsContainer,
  Title,
  Info,
  Bag,
  ReviewsContainer,
  ReviewItem,
  ReviewImage,
  ProfileImage,
  ReviewDetails,
  ReviewWriter,
  ReviewRating,
  HeaderContainer,
  ReviewContent,
  NavigationButtons,
  NavButton,
  HeadersContainer,
  BagImage,
  Address,
  Header,
  StarInfo,
  Line,
} from './PlaceDetailStyle';
import {StarRatingDisplay} from 'react-native-star-rating-widget';

const AttractionDetailsPage = ({route}: any) => {
  const attraction = PlaceDetail[0];
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const images = Array.from({length: 5}, (_, index) => ({
    id: index.toString(),
    source: require('../../assets/images/review.jpg'),
  }));

  const renderImageItem = ({item}: {item: any}) => (
    <ReviewImage source={item.source} />
  );

  const renderReviewItem = ({item}: {item: any}) => (
    <ReviewItem>
      <ProfileImage source={require('../../assets/images/basicProfile.png')} />
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

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/sagradafamilia.png')}
        resizeMode="cover"
      />
      <HeadersContainer>
        <Header>
          <Title>La Sagrada Familia</Title>
          <Address> C/ de Mallorca, 401, L`Eixample, 08013 Barcelona'</Address>
        </Header>
        <Bag>
          <BagImage
            source={require('../../assets/images/shopping.jpg')}
            resizeMode="cover"
          />
        </Bag>
      </HeadersContainer>

      <DetailsContainer>
        <Title>정보</Title>
        <Line />
        <StarInfo>
          <Info>평점: 4.9</Info>
          <StarRatingDisplay rating={4.9} starSize={18} />
        </StarInfo>
        <Info>평균 가격: {attraction.avg_price}</Info>
        <Info>
          운영 시간: {attraction.start_at} - {attraction.end_at}
        </Info>

        <ReviewsContainer>
          <Title>사진</Title>
          <Line />
          <FlatList
            data={images}
            renderItem={renderImageItem}
            horizontal
            keyExtractor={item => item.id}
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
            data={[attraction.reviews[currentReviewIndex]]}
            renderItem={renderReviewItem}
            contentContainerStyle={{
              paddingHorizontal: 20 / 2,
            }}
            horizontal
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
          />
        </ReviewsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default AttractionDetailsPage;
