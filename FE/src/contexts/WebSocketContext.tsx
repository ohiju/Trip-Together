import {TRIP_WS_URL} from '@env';
import React, {createContext, useEffect, useState} from 'react';
import {RootState} from '../store';
import {useAppSelector} from '../store/hooks';

interface WebSocetContainerProps {
  children?: React.ReactNode;
}

const WebSocketContext = createContext<WebSocket | null>(null);

const WebSocketContainer = ({children}: WebSocetContainerProps) => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const isLoggedin = useAppSelector((state: RootState) => state.user.isLogin);

  useEffect(() => {
    if (isLoggedin) {
      const socket = new WebSocket(TRIP_WS_URL);

      socket.onopen = () => {
        console.log('onopen');
      };

      socket.onmessage = e => {
        console.log('onmessage', e.data);
      };

      socket.onerror = e => {
        console.log('onerror', e.message);
      };

      socket.onclose = e => {
        console.log('onclose', e.code, e.reason);
      };

      setWebSocket(socket);

      return () => {
        if (socket) {
          socket.close();
        }
      };
    }
  }, [isLoggedin]);

  return (
    <WebSocketContext.Provider value={webSocket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export {WebSocketContext};
export default WebSocketContainer;
