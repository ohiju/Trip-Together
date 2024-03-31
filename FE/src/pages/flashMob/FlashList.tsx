import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import chatrooms from '../../assets/data/chatrooms';
import {FlashMainStackParams} from '../../interfaces/router/flashMob/FlashMainStackParams';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {
  ChatRoomDetails,
  ChatRoomItem,
  ChatRoomTitle,
  Container,
  MeetingInfo,
  ProfileImage,
  Title,
} from './AllFlashStyle';

const FlashList = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<FlashMainStackParams>>();

  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

  const handlePressChat = () => {
    navigation.navigate('ChatRoom');
  };

  const renderItem = ({item}: any) => (
    <ChatRoomItem onPress={handlePressChat}>
      <ProfileImage source={item.profileImage} />
      <ChatRoomDetails>
        <ChatRoomTitle>{item.title}</ChatRoomTitle>
        <MeetingInfo>{item.dateTime}</MeetingInfo>
        <MeetingInfo>{item.place}</MeetingInfo>
      </ChatRoomDetails>
    </ChatRoomItem>
  );

  return (
    <Container>
      <Title>내 모임</Title>
      <FlatList
        data={chatrooms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Title>전체 모임</Title>
      <FlatList
        data={chatrooms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default FlashList;
