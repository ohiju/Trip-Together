// Import React
import React from 'react';
// Import required components
import {SafeAreaView, StyleSheet, View} from 'react-native';
// Import Map and Marker
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const Map = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
        <GooglePlacesAutocomplete
          minLength={2}
          placeholder="어디로 여행을 떠나시나요?"
          query={{
            key: 'AIzaSyDt8I7Ler2-Pq6lw-8KybDOMYelUsP_sZk',
            language: 'ko',
            components: 'country:kr',
          }}
          keyboardShouldPersistTaps={'handled'}
          fetchDetails={true}
          onPress={(data, details) => {
            console.log(data, details);
          }}
          onFail={error => console.log(error)}
          onNotFound={() => console.log('no results')}
          keepResultsAfterBlur={true}
          enablePoweredByContainer={false}
          styles={styles.search}
        />
      </View>
    </SafeAreaView>
  );
};
export default Map;

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  search: {
    // container 감싸고 있는 컴포넌트
    container: {width: 400, marginTop: 20},
    // input을 감싸는 컴포넌트
    textInputContainer: {
      flexDirection: 'row',
    },
    // input창
    textInput: {
      borderRadius: 8,
      paddingVertical: 9,
      paddingHorizontal: 12,
      fontSize: 16,
      fontFamily: 'spoqaR',
      color: '#6c6c6e',
    },
    // 검색결과 리스트 컴포넌트
    listView: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      paddingHorizontal: 10,
      elevation: 8,
      shadowColor: '#6164BB',
    },
    // 검색결과 행
    row: {
      paddingVertical: 20,
    },
    // 검색결과 divided line
    separator: {
      height: 2,
      backgroundColor: '#c8c7cc',
    },
    // 검색결과 text
    description: {
      fontSize: 15,
      fontFamily: 'spoqaR',
    },
    // 필요없음
    loader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 20,
    },
  },
});
