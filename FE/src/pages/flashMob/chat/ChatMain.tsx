import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import useGetFlashMobs from '../../../apis/flashMob/useGetFlashMobs';
import ChatList from '../../../components/flashMob/chatMain/ChatList';
import ChatNav from '../../../components/flashMob/chatMain/ChatNav';
import {RootState} from '../../../store';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {setDisplay} from '../../../store/slices/tabState';
import {Wrapper} from './ChatMainStyle';

const ChatMain = () => {
  // 데이터
  const flashmobs = useAppSelector((state: RootState) => state.chat.flashmobs);
  const chats = flashmobs.filter(flashmob => flashmob.status === 'ATTEND');
  const waits = flashmobs.filter(flashmob => flashmob.status !== 'ATTEND');

  // 탭바
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  // 네비게이션 바
  const [nav, setNav] = useState(0);

  // API
  const getFlashMobs = useGetFlashMobs();
  useEffect(() => {
    getFlashMobs();
  }, []);

  return (
    <Wrapper>
      <ChatNav nav={nav} setNav={setNav} />
      {nav === 0 ? <ChatList chats={chats} /> : <ChatList chats={waits} />}
    </Wrapper>
  );
};

export default ChatMain;
