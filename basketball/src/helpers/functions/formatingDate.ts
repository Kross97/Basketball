export const formatDate = (date: string): string => {
  const itemsData = date.split('.');
  console.log('FORMAT', `${itemsData[2]}-${itemsData[1]}-${itemsData[0]}`);
  return `${itemsData[2]}-${itemsData[1]}-${itemsData[0]}`;
};
