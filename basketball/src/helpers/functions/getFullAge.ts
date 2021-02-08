import {
  msInMinute, minInDay, dayInYear, errorRate,
} from '../constants/timeСonstants';

export const getFullAge = (date: string) => {
  const differenceMs = (Date.now() - Date.parse(date) - errorRate);
  const fullYear = differenceMs / msInMinute / minInDay / dayInYear;
  return Math.floor(fullYear);
};
