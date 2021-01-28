import { msInMinute, minInDay, dayInYear } from '../constants/time_constants';

export const getFullAge = (date: string) => {
  const differenceMs = Date.now() - Date.parse(date);
  const fullYear = differenceMs / msInMinute / minInDay / dayInYear;
  return Math.floor(fullYear);
};
