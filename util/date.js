import { format } from 'date-fns';

export function getRecentFormattedDate(date) {
  return format(date, 'EEEE');
}

export function getFormattedDate(date) {
  return format(date, 'MMM dd, y');
}

export function getDaysMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
