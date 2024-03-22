import {ImageSourcePropType} from 'react-native';

interface IconPath {
  [key: string | number]: ImageSourcePropType;
  bank: ImageSourcePropType;
  card: ImageSourcePropType;
  caret: ImageSourcePropType;
  check: ImageSourcePropType;
  coin: ImageSourcePropType;
  info: ImageSourcePropType;
  lock: ImageSourcePropType;
  plane: ImageSourcePropType;
  plus: ImageSourcePropType;
  search: ImageSourcePropType;
  shield: ImageSourcePropType;
  trip: ImageSourcePropType;
  user: ImageSourcePropType;
  wallet: ImageSourcePropType;
}

export const iconPath: IconPath = {
  bank: require('./bank.svg'),
  card: require('./card.svg'),
  caret: require('./caret.svg'),
  check: require('./check.svg'),
  coin: require('./coin.svg'),
  info: require('./info.svg'),
  lock: require('./lock.svg'),
  plane: require('./plane.svg'),
  plus: require('./plus_round.svg'),
  search: require('./search.svg'),
  shield: require('./shield.svg'),
  trip: require('./trip.svg'),
  user: require('./user.svg'),
  wallet: require('./wallet.svg'),
};
