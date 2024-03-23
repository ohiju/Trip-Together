import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Places from '../../assets/data/place';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PlaceStackParams} from '../../interfaces/router/PlaceStackParams';

const PlaceInfoList = () => {
  const navigation = useNavigation<NavigationProp<PlaceStackParams>>();

  const handlePress = () => {
    navigation.navigate('placedetail');
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Image
        source={require('../../assets/images/sagradafamilia.png')}
        style={styles.thumbnail}
        resizeMode="contain"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.rating}>Rating: {item.avg_rating}</Text>
        <Text style={styles.price}>Avg Price: {item.avg_price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={Places}
      renderItem={renderItem}
      keyExtractor={item => item.attraction_id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: 'green',
  },
  price: {
    fontSize: 14,
  },
});

export default PlaceInfoList;
