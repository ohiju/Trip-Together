import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {imagePath} from '../../../assets/images/imagePath';
import {bg_lightgray, bg_main} from '../../../constants/colors';
import {HistoryBtnImg, HistoryBtnText, Wrapper} from './HistoryButtonStyle';

interface HistoryButtonProps {
  source: string;
  text: string;
  onPress: (e: GestureResponderEvent) => void;
}

const HistoryButton = ({source, text, onPress}: HistoryButtonProps) => {
  return (
    <Wrapper
      onPress={onPress}
      style={({pressed}) => ({
        backgroundColor: pressed ? bg_lightgray : bg_main,
      })}>
      <HistoryBtnImg source={imagePath[source]} resizeMode="cover" />
      <HistoryBtnText>{text}</HistoryBtnText>
    </Wrapper>
  );
};

export default HistoryButton;
