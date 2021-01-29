export const getBirthdaty = (age: string) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - Number(age));
  const month = date.getMonth() + 1;
  const actualMonth = month < 10 ? `0${month}` : month;
  const birthday = `${date.getFullYear()}-${actualMonth}-${date.getDate()}`;
  return birthday;
};
