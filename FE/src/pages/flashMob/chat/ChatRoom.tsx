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
import {pushMessage, setMessages} from '../../../store/slices/chat';
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
        console.log('storage', `${flashmob_id}_messages`);

        await AsyncStorage.getItem(`${flashmob_id}_messages`).then(
          async item => {
            if (item !== undefined && item) {
              const prev: message[] = JSON.parse(item);
              dispatch(setMessages(prev));
            } else {
              const empty: message[] = [];
              const stringifyEmpty = JSON.stringify(empty);
              await AsyncStorage.setItem(
                `${flashmob_id}_messages`,
                stringifyEmpty,
              );
              dispatch(setMessages(empty));
            }
          },
        );

        subscription.current = client.subscribe(
          `/topic/room.${flashmob_id}`,
          async frame => {
            const data: message = await JSON.parse(frame.body);
            await AsyncStorage.getItem(`${flashmob_id}_messages`).then(
              async item => {
                if (item !== undefined && item) {
                  const prev: message[] = JSON.parse(item);
                  const next: message[] = [...prev, data];
                  const stringifyNext = JSON.stringify(next);
                  await AsyncStorage.setItem(
                    `${flashmob_id}_messages`,
                    stringifyNext,
                  );
                } else {
                  const stringifyData = JSON.stringify([data]);
                  await AsyncStorage.setItem(
                    `${flashmob_id}_messages`,
                    stringifyData,
                  );
                }
              },
            );

            dispatch(pushMessage(data));
          },
        );
      };

      client.activate();
    };

    connect();
    return () => {
      console.log(subscription.current);

      if (subscription.current) {
        subscription.current.unsubscribe();
        client.deactivate();
        dispatch(setMessages([]));
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
