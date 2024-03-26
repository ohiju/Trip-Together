import {SharedTransition, withTiming} from 'react-native-reanimated';

const customTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withTiming(values.targetHeight),
    width: withTiming(values.targetWidth),
    originX: withTiming(values.targetOriginX),
    originY: withTiming(values.targetOriginY),
  };
});

export {customTransition};
