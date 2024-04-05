import {ImageSourcePropType} from 'react-native';

interface ImagePath {
  [key: string | number]: ImageSourcePropType | undefined;
  europe: ImageSourcePropType;
  europe2: ImageSourcePropType;
  europe3: ImageSourcePropType;
  europe4: ImageSourcePropType;
  europe5: ImageSourcePropType;
  adh01: ImageSourcePropType;
  attend: ImageSourcePropType;
  bag2: ImageSourcePropType;
  camera: ImageSourcePropType;
  chat: ImageSourcePropType;
  down: ImageSourcePropType;
  drag: ImageSourcePropType;
  euround: ImageSourcePropType;
  exchange: ImageSourcePropType;
  exchangecur: ImageSourcePropType;
  francesquare: ImageSourcePropType;
  uksquare: ImageSourcePropType;
  spainsquare: ImageSourcePropType;
  godown: ImageSourcePropType;
  goup: ImageSourcePropType;
  insurance: ImageSourcePropType;
  krround: ImageSourcePropType;
  leftarrow: ImageSourcePropType;
  lightning: ImageSourcePropType;
  logo: ImageSourcePropType;
  logobank: ImageSourcePropType;
  money: ImageSourcePropType;
  pay: ImageSourcePropType;
  plane: ImageSourcePropType;
  planning: ImageSourcePropType;
  profiledefault: ImageSourcePropType;
  profits: ImageSourcePropType;
  qrcode: ImageSourcePropType;
  remit: ImageSourcePropType;
  review: ImageSourcePropType;
  rightarrow: ImageSourcePropType;
  sagradafamilla: ImageSourcePropType;
  settlement: ImageSourcePropType;
  shopping: ImageSourcePropType;
  shopping2: ImageSourcePropType;
  sync: ImageSourcePropType;
  toggledown: ImageSourcePropType;
  trash: ImageSourcePropType;
  trip: ImageSourcePropType;
  ukround: ImageSourcePropType;
  up: ImageSourcePropType;
  flip: ImageSourcePropType;
  capture: ImageSourcePropType;
}

export const imagePath: ImagePath = {
  europe: require('./commercials/europe.jpg'),
  europe2: require('./commercials/europe2.jpg'),
  europe3: require('./commercials/europe3.jpg'),
  europe4: require('./commercials/europe4.jpg'),
  europe5: require('./commercials/europe5.jpg'),
  adh01: require('./adh01.png'),
  attend: require('./attend.png'),
  bag2: require('./bag2.png'),
  logobank: require('./logobank.png'),
  profiledefault: require('./profiledefault.png'),
  camera: require('./camera.png'),
  chat: require('./chat.png'),
  exchangecur: require('./exchangecur.png'),
  down: require('./down.png'),
  drag: require('./drag.png'),
  euround: require('./euround.png'),
  exchange: require('./exchange.png'),
  francesquare: require('./francesquare.png'),
  uksquare: require('./uksquare.png'),
  spainsquare: require('./spainsquare.png'),
  godown: require('./godown.png'),
  goup: require('./goup.png'),
  insurance: require('./insurance.png'),
  krround: require('./krround.png'),
  leftarrow: require('./leftarrow.png'),
  lightning: require('./lightning.png'),
  logo: require('./logo.png'),
  money: require('./money.png'),
  pay: require('./pay.png'),
  plane: require('./plane.png'),
  planning: require('./planning.png'),
  profits: require('./profits.png'),
  qrcode: require('./qrcode.png'),
  remit: require('./remit.png'),
  review: require('./review.jpg'),
  rightarrow: require('./rightarrow.png'),
  sagradafamilla: require('./sagradafamilia.png'),
  settlement: require('./settlement.png'),
  shopping: require('./shopping.png'),
  shopping2: require('./shopping2.jpg'),
  sync: require('./sync.png'),
  toggledown: require('./toggledown.png'),
  trash: require('./trash.png'),
  trip: require('./trip.png'),
  ukround: require('./ukround.png'),
  up: require('./up.png'),
  flip: require('./flip.png'),
  capture: require('./capture.png'),
};