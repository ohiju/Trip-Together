import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardShow = (e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height);
  };

  const onKeyboardHide = () => {};

  useEffect(() => {
    const onShow = Keyboard.addListener('keyboardDidShow', onKeyboardShow);

    return () => {
      onShow.remove();
    };
  }, []);

  return keyboardHeight;
};

export default useKeyboardHeight;
