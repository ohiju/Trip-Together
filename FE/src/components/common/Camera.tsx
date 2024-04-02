import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {imagePath} from '../../assets/images/imagePath';
import QRScanner from './QRscanner';

const Wrapper = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
`;

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

const Camera: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Wrapper onPress={onPress}>
        <Image source={imagePath.qrcode} />
      </Wrapper>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <QRScanner onClose={closeModal} />
      </Modal>
    </>
  );
};

export default Camera;
