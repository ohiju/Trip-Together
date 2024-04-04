import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {AddText, Wrapper} from './AddButtonStyle';

const AddButton = () => {
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const handleToSync = () => {
    navigation.navigate('SyncSelect');
  };

  return (
    <Wrapper onPress={handleToSync}>
      <AddText>추가</AddText>
    </Wrapper>
  );
};

export default AddButton;
