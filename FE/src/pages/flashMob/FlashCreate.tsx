import {Picker} from '@react-native-picker/picker';
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AppButton from '../../components/common/AppButton';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';
import {BottomButton} from '../../constants/AppButton';
import {FlashMobStackParams} from '../../interfaces/router/flashMob/FlashMobStackParams';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {
  Box,
  DateTimePickerText,
  InputField,
  InputLabel,
  PickerContainer,
  SideBox,
  StyledPicker,
  Wrapper,
} from './MakeFlashStyle';
import axios from 'axios';
import getToken from '../../hooks/getToken';
import {TRIP_API_URL} from '@env';

const FlashCreate = () => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [numParticipants, setNumParticipants] = useState('');
  const [num, setNum] = useState(1);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<FlashMobStackParams>>();

  const {id} = useRoute<RouteProp<FlashMobStackParams, 'FlashCreate'>>().params;

  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleDateConfirm = (date: any) => {
    setStartTime(date);
    hideDateTimePicker();
  };

  const handleSearchSubmit = async () => {
    const {access_token} = await getToken();
    const data = {
      title: title,
      start_time: startTime,
      max_users: num + 1,
    };
    try {
      await axios.post(
        `${TRIP_API_URL}/api/attraction/v1/attractions/${id}/flashmobs`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('FlashList', {id});
  };

  return (
    <DismissKeyboardView>
      <Wrapper>
        <SideBox />
        <Box>
          <InputLabel>제목</InputLabel>
          <InputField
            value={title}
            onChangeText={setTitle}
            placeholder="제목을 입력하세요"
          />
        </Box>

        <Box>
          <InputLabel>시작 시간</InputLabel>
          <DateTimePickerText onPress={showDateTimePicker}>
            {startTime ? startTime.toLocaleString() : '시작 시간을 선택하세요'}
          </DateTimePickerText>
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            mode="datetime"
            onConfirm={handleDateConfirm}
            onCancel={hideDateTimePicker}
          />
        </Box>

        <Box>
          <InputLabel>모집 인원</InputLabel>
          <PickerContainer>
            <StyledPicker
              selectedValue={numParticipants}
              onValueChange={(itemValue: string, value: number) => {
                setNumParticipants(itemValue);
                setNum(value);
              }}>
              <Picker.Item label="1명" value="1" />
              <Picker.Item label="2명" value="2" />
              <Picker.Item label="3명" value="3" />
              <Picker.Item label="4명" value="4" />
              <Picker.Item label="5명" value="5" />
              <Picker.Item label="6명" value="6" />
              <Picker.Item label="7명" value="7" />
              <Picker.Item label="8명" value="8" />
              <Picker.Item label="9명" value="9" />
              <Picker.Item label="10명" value="10" />
            </StyledPicker>
          </PickerContainer>
        </Box>
        <SideBox />
        <AppButton
          style={BottomButton}
          text="다음"
          onPress={handleSearchSubmit}
        />
      </Wrapper>
    </DismissKeyboardView>
  );
};

export default FlashCreate;
