import {ImageSourcePropType} from 'react-native';

interface IconPath {
  [key: string | number]: ImageSourcePropType;
  bank: ImageSourcePropType;
  caret: ImageSourcePropType;
  check: ImageSourcePropType;
  checkcircle: ImageSourcePropType;
  coin: ImageSourcePropType;
  info: ImageSourcePropType;
  lock: ImageSourcePropType;
  plane: ImageSourcePropType;
  pen: ImageSourcePropType;
  pin: ImageSourcePropType;
  plus: ImageSourcePropType;
  plus2: ImageSourcePropType;
  search: ImageSourcePropType;
  shield: ImageSourcePropType;
  trip: ImageSourcePropType;
  user: ImageSourcePropType;
  wallet: ImageSourcePropType;
  lightning: ImageSourcePropType;
}

export const iconPath: IconPath = {
  bank: require('./bank.svg'),
  caret: require('./caret.svg'),
  check: require('./check.svg'),
  checkcircle: require('./checkcircle.svg'),
  coin: require('./coin.svg'),
  info: require('./info.svg'),
  lock: require('./lock.svg'),
  pen: require('./pen.svg'),
  pin: require('./pin.svg'),
  plane: require('./plane.svg'),
  plus: require('./plus.svg'),
  plus2: require('./plus2.svg'),
  search: require('./search.svg'),
  shield: require('./shield.svg'),
  trip: require('./trip.svg'),
  user: require('./user.svg'),
  wallet: require('./wallet.svg'),
  lightning: require('./lightning.svg'),
};
