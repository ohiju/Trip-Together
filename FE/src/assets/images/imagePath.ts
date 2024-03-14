import {ImageSourcePropType} from 'react-native';

interface ImagePath {
  [key: string | number]: ImageSourcePropType | undefined;
}

export const imagePath: ImagePath = {
  // 둥근 국기
  UK: require('./UK_round.png'),
  EU: require('./EU_round.png'),
  // 광고 배너
  adh01: require('./adh01.png'),
  // 나머지
  basicProfile: require('./basicProfile.png'),
};
