import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PlanDetailParams} from '../../interfaces/router/PlanDetailParams';
import PlanDay from '../../components/travel/PlanDay';
import RenderPagination from '../../components/travel/RenderPagination';
import {useAppSelector} from '../../store/hooks';

const PlanDetail = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<PlanDetailParams>>();
  const dailyplans = useAppSelector(state => state.trip.tripInfo.daily_plans);

  const handleMapPress = () => {
    navigation.navigate('map');
  };

  const handleFinishPress = () => {
    navigation.navigate('travel_main');
  };

  const renderPagination = (index: any, total: any, context: any) => {
    return (
      <RenderPagination
        index={index}
        total={total}
        context={context}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleMapPress={handleMapPress}
        handleFinishPress={handleFinishPress}
      />
    );
  };

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      renderPagination={renderPagination}
      onIndexChanged={index => setCurrentPage(index)}
      loop={false}>
      {dailyplans.map((plan, index) => (
        <PlanDay key={index} dailyPlan={plan} />
      ))}
    </Swiper>
  );
};

export default PlanDetail;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
