const getTime = (timeString: string) => {
  const dateTime = new Date(timeString);
  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formattedTime;
};

export default getTime;
