import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {imagePath} from '../../assets/images/imagePath';
import {TravelStackParams} from '../../interfaces/router/TripStackParams';
import {PlanIcon, PlanImage, PlanText} from '../../pages/travel/MapStyle';

const MapHeaderRight = () => {
  const navigation = useNavigation<NavigationProp<TravelStackParams>>();
  const handlePlanPress = () => {
    navigation.navigate('plandetail');
  };

  return (
    <PlanIcon onPress={handlePlanPress}>
      <PlanImage source={imagePath.planning} resizeMode="contain" />
      <PlanText>계획보기</PlanText>
    </PlanIcon>
  );
};

export default MapHeaderRight;
