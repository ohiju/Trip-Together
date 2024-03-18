// Import React
import React from 'react';
// Import required components
import {SafeAreaView, StyleSheet, View} from 'react-native';
// Import Map and Marker
import GoogleMap from '../../components/travel/GoogleMap';
import SearchPlace from '../../components/travel/SearchPlace';

const Map = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <GoogleMap />
        <SearchPlace />
      </View>
    </SafeAreaView>
  );
};
export default Map;

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
});
