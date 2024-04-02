import {TRIP_WS_URL} from '@env';
import {RouteProp, useRoute} from '@react-navigation/native';
import {IPublishParams} from '@stomp/stompjs';
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react';
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {bg_light, bg_lightgray, font_light} from '../../../constants/colors';
import {WebSocketContext} from '../../../contexts/WebSocketContext';
import {ChatStackParams} from '../../../interfaces/router/flashMob/ChatMainStackParams';
import {message as messageType} from '../../../interfaces/states/ChatState';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {AddonBtn, Input, SendBtn, Wrapper} from './ChatInputStyle';

interface ChatInputProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const ChatInput = ({opened, setOpened}: ChatInputProps) => {
  // 데이터
  const {flashmob_id} =
    useRoute<RouteProp<ChatStackParams, 'ChatRoom'>>().params;
  const user = useAppSelector((state: RootState) => state.user.user);

  // 메뉴 열기, 닫기
  const inputRef = useRef<TextInput | null>(null);
  const pressAddonBtn = () => {
    if (opened) {
      setOpened(false);
      inputRef.current?.focus();
    } else {
      Keyboard.dismiss();
      setOpened(true);
    }
  };

  // 입력
  const [content, setContent] = useState('');
  const handleContent = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setContent(e.nativeEvent.text);
  };

  // Pub
  const client = useContext(WebSocketContext);
  const send = () => {
    if (!client?.connected) {
      console.log('소켓이 연결되지 않음');
      return;
    }
    const message: messageType = {
      flashmob_id,
      sender_id: user.member_id,
      sender_nickname: user.nickname,
      sender_image_url: user.image_url,
      content,
      created_at: new Date(),
      status: 'MESSAGE',
    };
    const body: string = JSON.stringify(message);
    const params: IPublishParams = {
      destination: `${TRIP_WS_URL}/pub/chat.message`,
      body,
    };
    client.publish(params);
  };

  return (
    <Wrapper>
      <AddonBtn
        onPress={pressAddonBtn}
        style={({pressed}) => ({
          backgroundColor: pressed ? bg_lightgray : bg_light,
        })}>
        <WithLocalSvg
          width={25}
          height={25}
          strokeWidth={3}
          rotation={opened ? 45 : 0}
          asset={iconPath.plus2}
        />
      </AddonBtn>
      <Input
        ref={inputRef}
        value={content}
        onChange={handleContent}
        onFocus={() => setOpened(false)}
        placeholder="채팅을 입력하세요."
      />
      <SendBtn onPress={send}>
        <WithLocalSvg
          width={30}
          height={30}
          fill={font_light}
          asset={iconPath.caret}
        />
      </SendBtn>
    </Wrapper>
  );
};

export default ChatInput;
