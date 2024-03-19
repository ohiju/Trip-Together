import React, {ReactNode, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {AnimatedMessage} from '../../pages/myPage/pin/PinRegistStyle';

interface ShakeMessageProps {
  children: ReactNode;
}

const ShakeMessage = ({children}: ShakeMessageProps) => {
  const X = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(X, {
        toValue: 5,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(X, {
        toValue: -5,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(X, {
        toValue: 5,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(X, {
        toValue: 0,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <AnimatedMessage style={{transform: [{translateX: X}]}}>
      {children}
    </AnimatedMessage>
  );
};

export default ShakeMessage;
