const groupByDate = <T extends {created_at: string}>(items: T[]) => {
  const groupedItems: {[ket: string]: typeof items} = {};

  items.forEach(item => {
    const date = new Date(item.created_at).toISOString().split('T')[0];

    if (!groupedItems[date]) {
      groupedItems[date] = [];
    }

    groupedItems[date].push(item);
  });

  return Object.entries(groupedItems);
};

export default groupByDate;
