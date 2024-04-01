const groupByIsDone = <T extends {is_done: boolean}>(items: T[]) => {
  const undone = items.filter(item => !item.is_done);
  const done = items.filter(item => item.is_done);

  const result: [string, T[]][] = [
    ['진행 중인 정산', undone],
    ['완료된 정산', done],
  ];

  return result;
};

export default groupByIsDone;
