export const parsePositionPlayer = (value: string): string => {
  if (value.length >= 7) {
    const indexSpace = value.indexOf('Forward');
    const valueArray = value.split('');
    valueArray.splice(indexSpace, 0, ' ');
    value = valueArray.join('');
  }
  return value;
};
