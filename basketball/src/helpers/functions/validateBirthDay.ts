export const validateBirthDayYoung = (value: string): boolean => {
  const dateBirthday = new Date(value);
  const acceptableDate = new Date(Date.now());
  acceptableDate.setFullYear(acceptableDate.getFullYear() - 18);
  const checkingYoung = dateBirthday < acceptableDate;
  return checkingYoung;
};

export const validateBirthDayOld = (value: string): boolean => {
  const dateBirthday = new Date(value);
  const checkingOld = new Date('1950-01-01') < dateBirthday;
  return checkingOld;
};
