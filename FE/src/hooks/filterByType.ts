const filterByType = <T extends {type: string}>(items: T[], target: string) => {
  const result = items.filter(item => item.type === target);

  return result;
};

export default filterByType;
