export const validateYearFoundation = (value: string) => {
  const currentDateYear = (new Date().getFullYear());
  const oldMaxYear = 1936;
  const checkingNew = Number(value) < currentDateYear;
  const checkingOld = oldMaxYear < Number(value);
  return checkingNew && checkingOld;
};
