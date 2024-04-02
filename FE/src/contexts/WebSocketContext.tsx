import {TRIP_WS_URL} from '@env';
import {Client, StompConfig} from '@stomp/stompjs';
import React, {createContext, useEffect, useRef} from 'react';
import {RootState} from '../store';
import {useAppSelector} from '../store/hooks';

interface WebSocetContainerProps {
  children?: React.ReactNode;
}

const WebSocketContext = createContext<Client | null>(null);

const WebSocketContainer = ({children}: WebSocetContainerProps) => {
  const token = useAppSelector((state: RootState) => state.user.token);
  const client = useRef<Client | null>(null);

  useEffect(() => {
    const stompConfig: StompConfig = {
      brokerURL: `${TRIP_WS_URL}`,
      debug: (frame: string) => console.log(frame),

      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
    };

    if (token) {
      client.current = new Client(stompConfig);

      client.current.onConnect = () => {
        console.log(`connected to ${stompConfig.brokerURL}`);
      };

      client.current.onDisconnect = error => {
        console.log(`disconnected to  ${stompConfig.brokerURL}`);
        console.log(error);
      };

      client.current.onStompError = error => {
        console.log(`stomp error to  ${stompConfig.brokerURL}`);
        console.log(error);
      };

      client.current.onWebSocketError = error => {
        console.log(`websoket error to  ${stompConfig.brokerURL}`);
        console.log(error);
      };

      return () => {
        if (client.current) {
          client.current.deactivate();
        }
      };
    }
  }, [token]);

  return (
    <WebSocketContext.Provider value={client.current}>
      {children}
    </WebSocketContext.Provider>
  );
};

export {WebSocketContext};
export default WebSocketContainer;
