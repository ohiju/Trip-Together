import React from 'react';
import {FlatList} from 'react-native';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {setDisplay} from '../../store/slices/tabState';
import {useAppDispatch} from '../../store/hooks';
import chatrooms from '../../assets/data/chatrooms';
import {
  Container,
  Title,
  ChatRoomItem,
  ProfileImage,
  ChatRoomDetails,
  ChatRoomTitle,
  MeetingInfo,
} from './AllFlashStyle';
import {FlashMainStackParams} from '../../interfaces/router/flashMob/FlashMainStackParams';

const AllFlash = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<FlashMainStackParams>>();

  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

  const handlePressChat = () => {
    navigation.navigate('chatroom');
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

export default AllFlash;
