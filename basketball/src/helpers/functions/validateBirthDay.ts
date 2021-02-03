export const validateBirthDay = (value: string): boolean => {
  const dateBirthday = new Date(value);
  const acceptableDate = new Date(Date.now());
  acceptableDate.setFullYear(acceptableDate.getFullYear() - 18);
  const checkingNew = dateBirthday < acceptableDate;
  const checkingOld = new Date('1950-01-01') < dateBirthday;
  return checkingNew && checkingOld;
};
