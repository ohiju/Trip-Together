import {Dimensions, GestureResponderEvent} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const useSwipeBottom = (
  onSwipeBottom?: (params?: any) => any,
  rangeOffset = 4,
) => {
  let firstTouch = 0;

  function onTouchStart(e: GestureResponderEvent) {
    firstTouch = e.nativeEvent.pageY;
  }

  function onTouchEnd(e: GestureResponderEvent) {
    const positionY = e.nativeEvent.pageY;
    const range = windowWidth / rangeOffset;

    if (positionY - firstTouch > range) {
      onSwipeBottom && onSwipeBottom();
    }
  }

  return {onTouchStart, onTouchEnd};
};

export default useSwipeBottom;
