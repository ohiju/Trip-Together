import {TRIP_WS_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StompSubscription} from '@stomp/stompjs';
import React, {useContext, useEffect, useRef, useState} from 'react';
import useGetFlashmobMembers, {
  GetFlashmobMembersParams,
} from '../../../apis/flashMob/useGetFlashmobMembers';
import ChatInput from '../../../components/flashMob/chatRoom/ChatInput';
import ChatMenus from '../../../components/flashMob/chatRoom/ChatMenus';
import GroupedMessages from '../../../components/flashMob/chatRoom/GroupedMessages';
import {WebSocketContext} from '../../../contexts/WebSocketContext';
import {ChatStackParams} from '../../../interfaces/router/flashMob/ChatMainStackParams';
import {message} from '../../../interfaces/states/ChatState';
import {RootState} from '../../../store';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {pushMessages, setMessages} from '../../../store/slices/chat';
import {Wrapper} from './ChatRoomStyle';

const ChatRoom = () => {
  const [opened, setOpened] = useState(false);
  const messages = useAppSelector((state: RootState) => state.chat.messages);
  const {flashmob_id} =
    useRoute<RouteProp<ChatStackParams, 'ChatRoom'>>().params;
  const dispatch = useAppDispatch();

  // AsyncStorage Message 조회, Room Socket 연결
  const client = useContext(WebSocketContext)?.current;
  const subscription = useRef<StompSubscription | null>(null);
  useEffect(() => {
    if (!client) return;

    const connect = () => {
      client.onConnect = async () => {
        await AsyncStorage.getItem(`${flashmob_id}`).then(async item => {
          console.log(item, 1);

          const empty: message[] = [];
          const stringifyEmpty = JSON.stringify(empty);
          await AsyncStorage.setItem(`${flashmob_id}`, stringifyEmpty);
          if (item !== undefined && item) {
            const prev: message[] = JSON.parse(item);
            dispatch(setMessages(prev));
          } else {
            dispatch(setMessages(empty));
          }
        });

        subscription.current = client.subscribe(
          `${TRIP_WS_URL}/exchange/chat.exchange/room.${flashmob_id}`,
          async frame => {
            console.log('subscribed', frame);
            const data: message = await JSON.parse(frame.body);

            await AsyncStorage.getItem(`${flashmob_id}`).then(async item => {
              console.log(item, 2);

              if (item !== undefined && item) {
                const prev: message[] = JSON.parse(item);
                const next: message[] = [...prev, data];
                const stringifyNext = JSON.stringify(next);
                await AsyncStorage.setItem(`${flashmob_id}`, stringifyNext);
              } else {
                const stringifyData = JSON.stringify([data]);
                await AsyncStorage.setItem(`${flashmob_id}`, stringifyData);
              }
            });

            dispatch(pushMessages(data));
          },
        );
      };

      client.activate();
    };

    connect();
    return () => {
      if (subscription.current) {
        subscription.current.unsubscribe();
      }
    };
  }, [flashmob_id, client]);

  // API 번개 채팅 참여자 조회
  const getFlashmobMembers = useGetFlashmobMembers();
  useEffect(() => {
    const params: GetFlashmobMembersParams = {
      flashmob_id,
    };
    getFlashmobMembers(params);
  }, []);

  return (
    <Wrapper>
      <GroupedMessages messages={messages} />
      <ChatInput opened={opened} setOpened={setOpened} />
      {opened ? <ChatMenus /> : null}
    </Wrapper>
  );
};

export default ChatRoom;
