import {Dimensions, GestureResponderEvent} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const useSwipeTop = (onSwipeTop?: (params?: any) => any, rangeOffset = 5) => {
  let firstTouch = 0;

  function onTouchStart(e: GestureResponderEvent) {
    firstTouch = e.nativeEvent.pageY;
  }

  function onTouchEnd(e: GestureResponderEvent) {
    const positionY = e.nativeEvent.pageY;
    const range = windowWidth / rangeOffset;

    if (firstTouch - positionY > range) {
      onSwipeTop && onSwipeTop();
    }
  }

  return {onTouchStart, onTouchEnd};
};

export default useSwipeTop;
