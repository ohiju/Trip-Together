import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {PlaceDetail} from '../../assets/data/placedetail';

const AttractionDetailsPage = ({route}: any) => {
  const attraction = PlaceDetail[0];
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const images = Array.from({length: 5}, (_, index) => ({
    id: index.toString(),
    source: require('../../assets/images/review.jpg'),
  }));

  // Render item for carousel of images
  const renderImageItem = ({item}: {item: any}) => (
    <Image source={item.source} style={styles.reviewImage} />
  );

  // Render item for carousel of reviews
  const renderReviewItem = ({item}: {item: any}) => (
    <View style={styles.reviewItem}>
      <Image
        source={require('../../assets/images/basicProfile.png')}
        style={styles.profileImage}
      />
      <View style={styles.reviewDetails}>
        <Text style={styles.reviewWriter}>{item.writer_nickname}</Text>
        <Text style={styles.reviewRating}>Rating: {item.rating}</Text>
        <Text style={styles.reviewContent}>{item.content}</Text>
      </View>
    </View>
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
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/sagradafamilia.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>La Sagrada Familia</Text>
        <Text style={styles.reviewsTitle}>정보</Text>
        <Text style={styles.info}>평균 가격: {attraction.avg_price}</Text>
        <Text style={styles.info}>
          운영 시간: {attraction.start_at} - {attraction.end_at}
        </Text>

        <Text style={styles.reviewsTitle}>사진</Text>
        <FlatList
          data={images}
          renderItem={renderImageItem}
          horizontal
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.reviewsContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.reviewsTitle}>리뷰</Text>
            <View style={styles.navigationButtons}>
              <TouchableOpacity onPress={goToPreviousReview}>
                <Text style={styles.navButton}>{'<'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={goToNextReview}>
                <Text style={styles.navButton}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>

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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
  reviewsContainer: {
    marginTop: 20,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: 300,
  },
  reviewImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewDetails: {
    flex: 1,
  },
  reviewWriter: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewRating: {
    fontSize: 14,
    color: 'green',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewContent: {
    fontSize: 14,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navButton: {
    fontSize: 35,
    marginRight: 10,
  },
});

export default AttractionDetailsPage;
