export const validateYearFoundationYoung = (value: string) => {
  const currentDateYear = (new Date().getFullYear());
  const checkingNew = Number(value) <= currentDateYear;
  return checkingNew;
};

export const validateYearFoundationOld = (value: string): boolean => {
  const oldMaxYear = 1900;
  const checkingOld = oldMaxYear < Number(value);
  return checkingOld;
};
