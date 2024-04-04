const groupByTwo = <T>(items: T[]) => {
  var result: ([T, T] | [T])[] = [];

  for (var i = 0; i < items.length; i += 2) {
    if (i + 1 < items.length) {
      result.push([items[i], items[i + 1]]);
    } else {
      result.push([items[i]]);
    }
  }

  return result;
};

export default groupByTwo;
