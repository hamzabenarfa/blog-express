const time = (date) => {
  return new Date(date).toDateString().substring(4, 15);
};

export default time;
