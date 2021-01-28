import { msInMinute, minInDay, dayInYear } from '../constants/time_constants';

export const getBirthdaty = (age: string) => {
  const convertAgeInMS = Number(age) * dayInYear * minInDay * msInMinute;
  const differenceMs = Date.now() - convertAgeInMS;
  const date = new Date(differenceMs);
  return `${date}`;
};
