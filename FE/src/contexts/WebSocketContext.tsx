import {TRIP_WS_URL} from '@env';
import {Client, StompConfig} from '@stomp/stompjs';
import React, {
  MutableRefObject,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import getToken from '../hooks/getToken';

interface WebSocetContainerProps {
  children?: React.ReactNode;
}

const WebSocketContext = createContext<MutableRefObject<Client | null> | null>(
  null,
);

const WebSocketContainer = ({children}: WebSocetContainerProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const client = useRef<Client | null>(null);

  useEffect(() => {
    const stompConfig: StompConfig = {
      brokerURL: `${TRIP_WS_URL}`,
      debug: (frame: string) => console.log(frame),
      reconnectDelay: 0,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
    };

    if (isLogin) {
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
  }, [isLogin]);

  useEffect(() => {
    const checkLogin = async () => {
      const {access_token} = await getToken();
      if (access_token) {
        setIsLogin(true);
      }
    };
    checkLogin();
  }, []);

  return (
    <WebSocketContext.Provider value={client}>
      {children}
    </WebSocketContext.Provider>
  );
};

export {WebSocketContext};
export default WebSocketContainer;
