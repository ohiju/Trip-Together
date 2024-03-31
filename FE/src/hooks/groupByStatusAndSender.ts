import {status} from '../interfaces/states/ChatState';

interface ItemProps {
  status: status;
  sender_id: number;
}

const groupByStatusAndSender = <T extends ItemProps>(items: T[]) => {
  if (items.length === 0) return [];

  let result: [status, T[]][] = [];
  let group: [status, T[]] = [items[0].status, [items[0]]];

  for (let i = 1; i < items.length; i++) {
    if (
      items[i].status === items[i - 1].status &&
      items[i].status === 'MESSAGE' &&
      items[i].sender_id === items[i - 1].sender_id
    ) {
      group[1].push(items[i]);
    } else {
      result.push(group);
      group = [items[i].status, [items[i]]];
    }
  }

  result.push(group);

  return result;
};

export default groupByStatusAndSender;
