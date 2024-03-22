import {ImageSourcePropType} from 'react-native';

interface ImagePath {
  [key: string | number]: ImageSourcePropType | undefined;
  France: ImageSourcePropType;
  KR: ImageSourcePropType;
  UK: ImageSourcePropType;
  EU: ImageSourcePropType;
  adh01: ImageSourcePropType;
  exchange: ImageSourcePropType;
  pay: ImageSourcePropType;
  remit: ImageSourcePropType;
  logo: ImageSourcePropType;
  bankLogo: ImageSourcePropType;
  basicProfile: ImageSourcePropType;
  myPage: ImageSourcePropType;
  sync: ImageSourcePropType;
  plane: ImageSourcePropType;
  lightning: ImageSourcePropType;
}

export const imagePath: ImagePath = {
  // 국기
  France: require('./France.png'),
  // 둥근 국기
  KR: require('./KR_round.png'),
  UK: require('./UK_round.png'),
  EU: require('./EU_round.png'),
  // 광고
  adh01: require('./adh01.png'),
  exchange: require('./exchange.png'),
  pay: require('./pay.png'),
  remit: require('./remit.png'),
  // 로고
  logo: require('./logo.png'),
  bankLogo: require('./bankLogo.png'),
  // 나머지
  basicProfile: require('./basicProfile.png'),
  myPage: require('./myPage.png'),
  sync: require('./sync.png'),
  plane: require('./plane.png'),
  lightning: require('./lightning.png'),
};
