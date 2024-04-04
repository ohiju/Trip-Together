import {imagePath} from '../assets/images/imagePath';

const getFlag = (nation: string) => {
  if (nation === '프랑스') {
    return imagePath.francesquare;
  } else if (nation === '스페인') {
    return imagePath.spainsquare;
  } else if (nation === '영국') {
    return imagePath.uksquare;
  }
};

export default getFlag;
