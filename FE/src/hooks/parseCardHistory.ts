import {imagePath} from '../assets/images/imagePath';
import {cardHistory} from '../interfaces/states/CardHistoryState';

const parseCardHistory = (history: cardHistory) => {
  const image_url = imagePath[`${history.nation.toLowerCase()}round`];
  const nation_kr = history.nation_kr;
  let sign = '';
  if (history.type !== '입금') {
    sign = '-';
  }
  const unit = String.fromCharCode(history.unit);
  const quantity = `${sign} ${unit} ${history.quantity}`;
  const type = history.type;
  const balance = history.balance
    ? `${unit} ${history.balance.toLocaleString('ko-KR')}`
    : '-';

  return {sign, image_url, nation_kr, quantity, type, balance};
};

export default parseCardHistory;
