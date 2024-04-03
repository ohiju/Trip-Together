import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import styled from 'styled-components/native';
import {QRdata} from '../../apis/useQR';
import {
  PinAuthProps,
  RootStackParams,
} from '../../interfaces/router/RootStackParams';

const QRScanner = ({onClose}: any) => {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const onBarcodeScan = (value: string) => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(value);
    const {attraction_business_num, quantity} = JSON.parse(value);
    const pinData: QRdata = {
      pin_num: '',
      attraction_business_num: attraction_business_num,
      quantity: quantity,
    };

    const props: PinAuthProps = {
      pinData,
      api: 'qrpay',
    };
    navigation.navigate('PinAuth', props);

    setOpneScanner(false);
    onClose();
  };

  return (
    <Camera>
      {opneScanner ? (
        <FlexView>
          <CameraScreen
            allowCaptureRetake={false}
            captureButtonImageStyle={{}}
            cameraFlipImageStyle={{}}
            hideControls={true}
            showFrame={false}
            scanBarcode={true}
            laserColor={'blue'}
            frameColor={'yellow'}
            cameraRatioOverlay={null}
            captureButtonImage={null}
            cameraFlipImage={null}
            torchOnImage={null}
            torchOffImage={null}
            torchImageStyle={{}}
            onReadCode={event =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
            onBottomButtonPressed={() => {}}
          />
        </FlexView>
      ) : (
        <Container>
          <StyledText>{qrvalue ? 'Scanned Result: ' + qrvalue : ''}</StyledText>
        </Container>
      )}
    </Camera>
  );
};

export default QRScanner;

const Camera = styled.SafeAreaView`
  position: absolute;
  flex: 1;
`;

const FlexView = styled.View`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: 'white';
  padding: 10px;
  align-items: center;
`;

const StyledText = styled.Text`
  color: 'black';
  font-size: 16px;
  text-align: center;
  padding: 10px;
  margin-top: 16px;
`;
