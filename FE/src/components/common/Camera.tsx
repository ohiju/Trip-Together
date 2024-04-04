import React, {useState} from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';
import {imagePath} from '../../assets/images/imagePath';
import {font_dark} from '../../constants/colors';
import QRScanner from './QRscanner';

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-top: 4px;
`;

const Icon = styled.Image`
  width: 26px;
  height: 26px;
`;

const IconText = styled.Text`
  color: ${font_dark};
  font-size: 12px;
`;

const Camera = () => {
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
        <Icon source={imagePath.qrcode} />
        <IconText>결 제</IconText>
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
