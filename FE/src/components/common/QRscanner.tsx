import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import {
  PinAuthProps,
  RootStackParams,
} from '../../interfaces/router/RootStackParams';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const QRScanner = ({onClose}: any) => {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const onBarcodeScan = qrvalue => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(qrvalue);
    const pinData = {
      attraction_business_num: qrvalue.data.attraction_business_num,
      quantity: qrvalue.data.quantity,
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
    <SafeAreaView style={styles.camera}>
      {opneScanner ? (
        <View style={{flex: 1}}>
          <CameraScreen
            showFrame={false}
            // Show/hide scan frame
            scanBarcode={true}
            // Can restrict for the QR Code only
            laserColor={'blue'}
            // Color can be of your choice
            frameColor={'yellow'}
            // If frame is visible then frame color
            colorForScannerFrame={'black'}
            // Scanner Frame color
            onReadCode={event =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  camera: {
    position: 'absolute',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
});
