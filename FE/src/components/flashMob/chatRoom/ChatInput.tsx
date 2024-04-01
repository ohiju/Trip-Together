import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {bg_light, bg_lightgray, font_light} from '../../../constants/colors';
import {AddonBtn, Input, SendBtn, Wrapper} from './ChatInputStyle';

interface ChatInputProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const ChatInput = ({opened, setOpened}: ChatInputProps) => {
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
      <SendBtn>
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
