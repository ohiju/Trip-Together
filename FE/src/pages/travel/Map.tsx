import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {imagePath} from '../../assets/images/imagePath';
import PlaceInfo from '../../components/common/PlaceInfo';
import GoogleMap from '../../components/travel/GoogleMap';
import SearchPlace from '../../components/travel/SearchPlace';
import {MapStackParams} from '../../interfaces/router/MapStackParams';
import {Container, PlanIcon, PlanImage} from './MapStyle';

const Map = () => {
  const navigation = useNavigation<NavigationProp<MapStackParams>>();

  const handlePlanPress = () => {
    navigation.navigate('plandetail');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <GoogleMap />
        <SearchPlace />
        <PlanIcon onPress={handlePlanPress}>
          <PlanImage source={imagePath.planning} />
        </PlanIcon>
        <PlaceInfo theme="trip" />
      </Container>
    </SafeAreaView>
  );
};
export default Map;
