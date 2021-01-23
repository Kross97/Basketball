import { msInMinute, minInDay, dayInYear } from '../constants/time_constants';

export const getFullAge = (date: string) => {
  const difference = Date.now() - Date.parse(date);
  const fullYear = difference / msInMinute / minInDay / dayInYear;
  return Math.floor(fullYear);
};
