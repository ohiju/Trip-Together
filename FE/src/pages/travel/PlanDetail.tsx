import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
// import PlanDay from '../../components/travel/PlanDay';
import RenderPagination from '../../components/travel/RenderPagination';

const PlanDetail = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

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
      {/* <PlanDay /> */}
      <View style={styles.slide1}>
        <Text style={styles.text}>1일차 계획</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>2일차 계획</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>3일차 계획</Text>
      </View>
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
