import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import RenderPagination from '../../components/travel/RenderPagination';

const PlanDetail = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const renderPagination = (index, total, context) => {
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
  paginationStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  paginationText: {
    color: 'white',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  },
});
