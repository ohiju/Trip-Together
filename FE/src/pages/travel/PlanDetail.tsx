import {TRIP_API_URL} from '@env';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import axios, {AxiosError} from 'axios';
import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import PlanDay from '../../components/travel/PlanDay';
import RenderPagination from '../../components/travel/RenderPagination';
import getToken from '../../hooks/getToken';
import {PlanDetailParams} from '../../interfaces/router/PlanDetailParams';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';

const PlanDetail = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<PlanDetailParams>>();
  const dispatch = useAppDispatch();
  const trip = useAppSelector(state => state.trip.tripInfo);

  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  const handleMapPress = () => {
    navigation.navigate('map');
  };

  const handleFinishPress = async () => {
    const {access_token} = await getToken();

    const data = {
      start_region_id: trip.start_region,
      start_at: new Date(trip.start_at),
      end_at: new Date(trip.end_at),
      title: trip.title,
      total_estimated_budget: trip.total_estimated_budget,
      daily_plans: trip.daily_plans,
    };
    try {
      await axios.patch(
        `${TRIP_API_URL}/api/plan/v1/plans/${trip.plan_id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      navigation.navigate('travel_main');
      Alert.alert('알림', '완료처리 되었습니다.');
    } catch (err) {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse) {
        Alert.alert('알림', (errorResponse as any).data.message);
      }
    }
  };

  const renderPagination = (index: number, total: number, context: Swiper) => {
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
      {trip.daily_plans.map((plan, index) => (
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
