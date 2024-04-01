const getCurrency = (nation: string) => {
  console.log(nation);
  if (nation === '프랑스' || nation === '스페인') {
    return '€';
  } else if (nation === '영국') {
    return '₤';
  }
};

export default getCurrency;
