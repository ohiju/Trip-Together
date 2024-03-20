import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import {
  PaginationStyle,
  PaginationText,
  CenteredView,
  ModalView,
  Item,
} from './RenderPaginationStyle';

interface PaginationProps {
  index: any;
  total: any;
  context: any;
  currentPage: number;
  modalVisible: boolean;
  setCurrentPage: any;
  setModalVisible: any;
}

const RenderPagination = ({
  index,
  total,
  context,
  currentPage,
  setCurrentPage,
  modalVisible,
  setModalVisible,
}: PaginationProps) => {
  const pages = Array.from({length: total}, (_, i) => i + 1);

  return (
    <View style={styles.paginationStyle}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <PaginationText>
          {currentPage + 1} / {total}
        </PaginationText>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <CenteredView>
          <ModalView>
            <FlatList
              data={pages}
              renderItem={({item}) => (
                <Item
                  onPress={() => {
                    setCurrentPage(item - 1);
                    context.scrollBy(item - index - 1);
                    setModalVisible(false);
                  }}>
                  <Text style={styles.itemText}>{item}일차</Text>
                </Item>
              )}
              keyExtractor={item => item.toString()}
            />
          </ModalView>
        </CenteredView>
      </Modal>
    </View>
  );
};

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
    right: 180,
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

export default RenderPagination;
