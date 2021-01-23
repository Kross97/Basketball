export const getFullAge = (date: string) => {
  const difference = Date.now() - Date.parse(date);
  return new Date(difference).getFullYear();
};
