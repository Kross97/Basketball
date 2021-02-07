export const formatDateForServer = (date: string): string => {
  const itemsData = date.split('.');
  return `${itemsData[2]}-${itemsData[1]}-${itemsData[0]}`;
};

export const formatDateForForm = (date: string): string => {
  const itemsData = date.slice(0, 10).split('-');
  return `${itemsData[2]}.${itemsData[1]}.${itemsData[0]}`;
};
