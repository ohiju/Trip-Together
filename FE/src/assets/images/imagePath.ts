import {ImageSourcePropType} from 'react-native';

interface ImagePath {
  [key: string]: ImageSourcePropType | undefined;
}

export const roundNationImagePath: ImagePath = {
  UK: require('./UK_round.png'),
  EU: require('./EU_round.png'),
};
